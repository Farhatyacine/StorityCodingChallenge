import { FAKE_USERS_ADDED } from "../Actions/type";

export interface User {
  _id: number;
  name: string;
  gender: string;
  birthDay: Date;
  image: string;
}

interface Action {
  type: string;
  payload: User[] | User;
}

export default function(state: User[] | User = [], action: Action) {
  switch (action.type) {
    case FAKE_USERS_ADDED:
      state = action.payload;
      return state;
    default:
      return state;
  }
}
