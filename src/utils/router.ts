import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import queryString from 'query-string';

export function useQuery() {
  const [queryParams, setQueryParams] = useState({} as any);
  const currentParams = queryString.parse(useLocation().search);

  useEffect(() => {
    function checkParams() {
      if (!isObjectEquivalent(queryParams, currentParams)) {
        setQueryParams(currentParams)
      }
    }
    checkParams()
  }, [currentParams]);

  return queryParams;
}

export function isObjectEquivalent(a: any, b: any) {
  var aProps = Object.getOwnPropertyNames(a);
  var bProps = Object.getOwnPropertyNames(b);

  if (aProps.length != bProps.length) {
    return false;
  }

  for (var i = 0; i < aProps.length; i++) {
    var propName = aProps[i];
    if (a[propName] !== b[propName]) {
      return false;
    }
  }

  return true;
}
