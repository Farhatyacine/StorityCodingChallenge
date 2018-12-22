import { SEARCH_VALUE } from "../Actions/type";

interface Action {
  type: string;
  payload: string;
}

export default function(state: string = "", action: Action) {
  switch (action.type) {
    case SEARCH_VALUE:
      state = action.payload;
      return state;
    default:
      return state;
  }
}
