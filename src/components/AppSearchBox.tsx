/** @jsx jsx */
import { css, jsx } from '@emotion/react'
import React, { useEffect, useState } from "react";
import tw from "twin.macro";
import { useDebounce } from 'use-debounce';
import { RequestStatus } from "@/enum/request.enum";
import HttpClient from "@/utils/http-client";
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
import { FiChevronDown, FiPlus } from "react-icons/fi";
import { HttpStatus } from "@/enum/http-status.enum";
import Highlighter from "react-highlight-words";

type AppSearchBoxProps = {
  label?: string;
  placeholder?: string;
  name?: any;
  errors?: string[];
  fieldKey?: any;
  required?: boolean;
  onChange?: any;
  disabled?: boolean;
  height?: number;
  apiUrl?: string;
  formSelected?: any;
  multiple?: boolean;
  isAddable?: boolean;
  size?: "normal" | "small";
  query?: any;
};

const AppSearchBox = ({
  label,
  name,
  required,
  onChange,
  multiple = false,
  size = "normal",
  query,
  disabled,
  height,
  errors = [],
  fieldKey,
  formSelected,
  isAddable = false,
}: AppSearchBoxProps) => {
  fieldKey ||= name;
  const apiUrl = `/app-bases`;
  const [keyword, setKeyword] = useState(null);
  const [popperAnchorEl, setPopperAnchorEl] = useState(null);
  const [selectedValue, setSelectedValue] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [searchDebounceValue] = useDebounce(searchValue, 250);

  const [data, setData] = useState({
    hasMore: true,
    page: 1,
    items: [],
    error: null,
    status: RequestStatus.Nop,
  });
  const placeholder = "Search"

  const inputHeight =
    size == "normal"
      ? "height: var(--navbar-height); min-height: var(--navbar-height);"
      : "height: var(--navbar-small-height); min-height: var(--navbar-small-height);";

  useEffect(() => {
    async function loadData() {
      getData(1);
    }
    loadData();
  }, [formSelected, keyword, query, searchDebounceValue]);

  const getData = async (page: number) => {
    try {
      setData({
        hasMore: true,
        page,
        error: null,
        items: page === 1 ? [] : data.items,
        status: RequestStatus.Loading,
      });
      const params = _.pick(
        {
          ...query,
          q: searchValue,
          page,
          limit: 10,
          keywords: keyword,
        },
        _.identity
      );
      const res = await HttpClient.get(apiUrl, {
        params,
      });
      if (res?.data?.length) {
        setData({
          hasMore: true,
          page,
          error: null,
          items: page === 1 ? [...res?.data] : [
            ...data.items,
            ...res?.data
          ],
          status: RequestStatus.Success,
        });
      } else {
        setData({
          hasMore: false,
          page,
          error: null,
          items: [
            ...data.items
          ],
          status: RequestStatus.Success,
        });
      }
    } catch (error) {
      if (error.statusCode == HttpStatus.NoConnection) {
        setData({
          hasMore: true,
          page,
          error: error.message,
          items: data.items,
          status: RequestStatus.NoConnection,
        });
      } else {
        setData({
          hasMore: true,
          page,
          error: error.message,
          items: data.items,
          status: RequestStatus.Error,
        });
      }
    }
  };

  const selectBtnStyle = css`
    ${tw`bg-primary border-b-0 font-light text-gray-700 w-full text-left shadow-none p-2`}
    max-width: 30vw;
    ${height ? `height: ${height}px` : inputHeight}
    &:hover {
      ${tw`cursor-pointer bg-primary`}
    }
  `;

  const inputStyle = css`
    ${tw`border-b w-full`}
    input {
      ${tw`bg-transparent border-b-0 font-light text-gray-700 w-full px-4 py-1`}
      height: var(--input-height);
    }
  `;

  const selectPopperStyle = css`
    ${tw`bg-white border-b-0 rounded shadow-lg font-light text-gray-700 w-full z-10`}
    z-index: 10000;
    margin-top: calc((var(--navbar-height) - 4px) * -1) !important;
    max-width: 30vw;

    .MuiAutocomplete-root {
      ${tw`relative`}
    }
    .MuiAutocomplete-popper {
      ${tw`w-full! left-0 rounded-none shadow-none relative`}
    }

    .MuiAutocomplete-paper {
      ${tw`rounded-none shadow-none my-0`}
    }

    .MuiAutocomplete-listbox {
      ${tw`p-0`}
    }

    .MuiAutocomplete-option {
      ${tw`p-0`}
    }
  `;

  const listSelectedItemStyle = css`
    ${tw`p-3 flex items-center justify-start w-full border border-solid shadow rounded bg-white h-full`}

    .title {
      ${tw`text-gray-500 truncate`}
    }

    .subtitle {
      ${tw`text-xs text-gray-500 truncate`}
    }

    .icon {
      ${tw`w-10 h-10 bg-gray-200 border border-gray-200 text-xl flex items-center justify-center mr-3 rounded text-gray-400 shadow`}
    }

    &:hover {
      ${tw`cursor-pointer`}
    }
  `;

  const listItemStyle = css`
    ${tw`p-3 flex items-center justify-start w-full border-b`}

    .title {
      ${tw`text-gray-700 truncate`}
    }

    .subtitle {
      ${tw`text-xs text-gray-500 truncate`}
    }

    .icon {
      ${tw`w-10 h-10 bg-gray-200 border border-gray-200 text-xl flex items-center justify-center mr-3 rounded text-gray-400 shadow`}

      &.is-icon {
        ${tw`text-2xl`}
      }
    }

    &:hover {
      ${tw`cursor-pointer bg-gray-50`}
    }
  `;

  const preSelectStyle = css`
    ${tw`p-3 flex items-center justify-start w-full border border-solid shadow rounded bg-white h-full`}

    .title {
      ${tw`text-gray-500 truncate opacity-50 flex-grow`}
    }
    .icon {
      ${tw`w-10 h-10 bg-gray-200 border border-gray-200 text-xl flex items-center justify-center mr-3 rounded text-gray-400 opacity-50`}
    }

    .arrow {
      ${tw`text-white truncate opacity-50`}
    }
  `

  const handleClick = (event: any) => {
    setPopperAnchorEl(popperAnchorEl ? null : event.currentTarget);
  };

  const open = Boolean(popperAnchorEl);
  const id = "app-module-selector";

  const handleClose = (_, reason: string) => {
    if (reason === 'toggleInput') {
      return;
    }
    setPopperAnchorEl(null);
  };
  return (
    <NoSsr>
      <ButtonBase
        css={selectBtnStyle}
        onClick={handleClick}
        aria-describedby={id}
      >
        <div css={preSelectStyle}>
          <div className="title">{placeholder}</div>
        </div>
      </ButtonBase>
      <Popper
        id={id}
        open={open}
        anchorEl={popperAnchorEl}
        css={selectPopperStyle}
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
            <div css={listItemStyle}>
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
          getOptionLabel={(option) => option.name}
          ListboxProps={{
            onScroll: ({ target }) => {
              const isScrollBottom = target.scrollHeight - target.scrollTop === target.clientHeight
              if (isScrollBottom && data.hasMore) {
                getData(data.page + 1)
              }
            },
          }}
          renderInput={(params) => (
            <div css={inputStyle}>
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
