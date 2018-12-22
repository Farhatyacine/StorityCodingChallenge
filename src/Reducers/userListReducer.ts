import {
  FAKE_USERS_ADDED,
  USER_ADDED,
  USER_DELETED,
  USER_UPDATED
} from "../Actions/type";
import _ from "lodash";

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
    case USER_ADDED:
      state = _.concat(state, action.payload);
      console.log(state);
      return state;
    case USER_DELETED:
      state = _.remove(state as User[], user => {
        return user._id !== (action.payload as User)._id;
      });
      return state;
    case USER_UPDATED:
      const index = _.findIndex(state as User[], user => {
        return user._id === (action.payload as User)._id;
      });
      (state as User[])[index] = {
        ...(state as User[])[index],
        name: (action.payload as User).name,
        birthDay: (action.payload as User).birthDay,
        gender: (action.payload as User).gender
      };
      return state;
    default:
      return state;
  }
}
