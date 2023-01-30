import { combineReducers } from "redux";
import { postsReducers } from "./reducer/posts";

export const rootReducer = combineReducers({
  posts: postsReducers,
});
