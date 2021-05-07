import React, { useEffect, useState } from "react";
import { useDebounce } from 'use-debounce';
import {
  Button,
  ButtonGroup,
  ButtonBase,
  InputBase,
  MenuItem,
  NoSsr,
  Popper,
  Select,
} from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import _ from "underscore";
import Highlighter from "react-highlight-words";
import styles from './AppSeachBox.module.scss';
import { nanoid } from 'nanoid'
import { HttpStatus } from "../enum/http-status.enum";
import HttpClient from "../utils/http-client";

enum RequestStatus {
  Nop = 0,
  Loading = 1,
  Success = 2,
  Error = 3,
  NoConnection = 4,
}

type AppSearchBoxProps = {
  label?: string;
  placeholder?: string;
  name?: any;
  errors?: string[];
  fieldKey?: any;
  required?: boolean;
  onChange?: Function;
  disabled?: boolean;
  height?: number;
  apiUrl?: string;
  formSelected?: any;
  multiple?: boolean;
  query?: any;
};

const AppSearchBox = ({
  label,
  name,
  required,
  onChange,
  multiple = false,
  query,
  disabled,
  height,
  errors = [],
  fieldKey,
  formSelected,
  placeholder = "Search"
}: AppSearchBoxProps) => {
  fieldKey ||= name;
  const apiUrl = `/app-bases`;
  const [keyword, setKeyword] = useState(null);
  const [popperAnchorEl, setPopperAnchorEl] = useState(null);
  const [selectedValue, setSelectedValue] = useState([] as any[]);
  const [searchValue, setSearchValue] = useState('');
  const [searchDebounceValue] = useDebounce(searchValue, 250);
  const id = nanoid()

  const [data, setData] = useState({
    hasMore: true,
    page: 1,
    items: [],
    error: null,
    status: RequestStatus.Nop,
  });

  useEffect(() => {
    async function loadData() {
      getData(1);
    }
    loadData();
  }, [formSelected, keyword, query, searchDebounceValue]);

  const getData = async (page: number) => {
    // try {
    //   setData({
    //     hasMore: true,
    //     page,
    //     error: null,
    //     items: page === 1 ? [] : data.items,
    //     status: RequestStatus.Loading,
    //   });
    //   const params = _.pick(
    //     {
    //       ...query,
    //       q: searchValue,
    //       page,
    //       limit: 10,
    //       keywords: keyword,
    //     },
    //     _.identity
    //   );
    //   const res = await HttpClient.get(apiUrl, {
    //     params,
    //   });
    //   if (res?.data?.length) {
    //     setData({
    //       hasMore: true,
    //       page,
    //       error: null,
    //       items: (page === 1 ? [...res?.data] : [
    //         ...data.items,
    //         ...res?.data
    //       ]) as any[],
    //       status: RequestStatus.Success,
    //     });
    //   } else {
    //     setData({
    //       hasMore: false,
    //       page,
    //       error: null,
    //       items: [
    //         ...data.items
    //       ],
    //       status: RequestStatus.Success,
    //     });
    //   }
    // } catch (error) {
    //   if (error.statusCode == HttpStatus.NoConnection) {
    //     setData({
    //       hasMore: true,
    //       page,
    //       error: error.message,
    //       items: data.items,
    //       status: RequestStatus.NoConnection,
    //     });
    //   } else {
    //     setData({
    //       hasMore: true,
    //       page,
    //       error: error.message,
    //       items: data.items,
    //       status: RequestStatus.Error,
    //     });
    //   }
    // }
  };

  const handleClick = (event: any) => {
    setPopperAnchorEl(popperAnchorEl ? null : event.currentTarget);
  };

  const open = Boolean(popperAnchorEl);

  const handleClose = (_: any, reason: string) => {
    if (reason === 'toggleInput') {
      return;
    }
    setPopperAnchorEl(null);
  };
  return (
    <NoSsr>
      <ButtonBase
        className={styles.button}
        onClick={handleClick}
        aria-describedby={id}
      >
        <div className={styles.preSelectItem}>
          <div className="title">{placeholder}</div>
        </div>
      </ButtonBase>
      <Popper
        id={id}
        open={open}
        anchorEl={popperAnchorEl}
        className={styles.popper}
        placement="bottom-start"
      >
        <Autocomplete
          open
          multiple
          onClose={handleClose}
          onChange={(event, newValue) => {
            setSelectedValue(newValue);
            setSearchValue('');
          }}
          disablePortal
          onInputChange={(e, value: string, reason: string) => {
            setSearchValue(value);
          }}
          renderTags={() => null}
          noOptionsText="No labels"
          renderOption={(option: any, { selected }) => (
            <div className={styles.listItem}>
              <div>
                <div className="title">
                  <Highlighter
                    highlightClassName="text-highlight"
                    searchWords={[searchValue]}
                    autoEscape={true}
                    textToHighlight={option.name}
                  />
                </div>
                <div className="subtitle">{option.name}</div>
              </div>
            </div>
          )}
          getOptionLabel={(option: any) => option.name}
          ListboxProps={{
            onScroll: ({ target }: any) => {
              const isScrollBottom = target.scrollHeight - target.scrollTop === target.clientHeight
              if (isScrollBottom && data.hasMore) {
                getData(data.page + 1)
              }
            },
          }}
          renderInput={(params) => (
            <div className={styles.input}>
              <InputBase
                ref={params.InputProps.ref}
                inputProps={params.inputProps}
                placeholder={`Search`}
                autoFocus
              />
              <ButtonGroup className="search-mode-toggle">
                <Button>Back Logs</Button>
                <Button>All</Button>
              </ButtonGroup>
            </div>
          )}
          options={data.items}
        />
      </Popper>
    </NoSsr>
  );
};

export default AppSearchBox;
