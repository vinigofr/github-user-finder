import { combineReducers } from "redux";
import usersData from "./userData";
import userRepos from './userRepos';

const rootReducer = combineReducers({
  usersData,
  userRepos,
});

export default rootReducer;