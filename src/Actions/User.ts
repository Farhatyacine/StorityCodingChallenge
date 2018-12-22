import { USER_ADDED, USER_DELETED, USER_UPDATED, USER_TO_EDIT } from "./type";
import faker from "faker/locale/de";
import _ from "lodash";
import { User } from "../Reducers/userListReducer";

export const AddUser = (user: User) => {
  user._id = faker.random.number();
  user.image = faker.image.avatar();
  return {
    type: USER_ADDED,
    payload: user
  };
};

export const DeleteUser = (user: User) => {
  return {
    type: USER_DELETED,
    payload: user
  };
};

export const UpdateUser = (user: User) => {
  return {
    type: USER_UPDATED,
    payload: user
  };
};

export const UserToEdit = (user: User) => {
  return {
    type: USER_TO_EDIT,
    payload: user
  };
};
