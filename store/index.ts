import { createWrapper, MakeStore } from 'next-redux-wrapper';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createSelector } from 'reselect';
import postReducer from './posts';
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';

const rootReducer = combineReducers({
  posts: postReducer,
})

export const getPosts = (state: RootState): Post[] => state.posts;
export const getPostsSortByDate = createSelector(
  getPosts,
  (posts: Post[]) => [...posts].sort((a, b) => b.id - a.id),
);
export const getLastPosts = createSelector(
  getPostsSortByDate,
  (posts: Post[]) => [...posts].slice(-1),
);

export type RootState = ReturnType<typeof rootReducer>;

const client = axios.create({
  baseURL: 'https://next-simple-blog.crew.red/',
  responseType: 'json',
});

const initStore: MakeStore<RootState> = () => (
  createStore(rootReducer, composeWithDevTools(applyMiddleware(axiosMiddleware(client))))
);

export const wrapper = createWrapper<RootState>(initStore);
