import { configureStore } from "@reduxjs/toolkit";
import { postsSlice } from "./posts-slice";
import { usersSlice } from "./users-slice";

export const store = configureStore({
  reducer: {
    posts: postsSlice.reducer,
    users: usersSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
