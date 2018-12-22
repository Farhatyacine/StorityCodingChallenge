import { USER_TO_EDIT } from "../Actions/type";
import { User } from "./userListReducer";

interface Action {
  type: string;
  payload: User;
}

export default function(state = [], action: Action) {
  switch (action.type) {
    case USER_TO_EDIT:
      return action.payload;
    default:
      return state;
  }
}
