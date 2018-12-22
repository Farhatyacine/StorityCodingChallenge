import { SEARCH_VALUE } from "./type";
import _ from "lodash";

export const PullSearchValue = (search: string) => {
  return {
    type: SEARCH_VALUE,
    payload: search
  };
};
