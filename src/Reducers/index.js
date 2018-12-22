import { combineReducers } from "redux";
import userListReducer from "./userListReducer";
import Search from "./Search";
import userToEdit from "./userToEdit";

export default combineReducers({
  userList: userListReducer,
  searchValue: Search,
  userToEdit: userToEdit
});
