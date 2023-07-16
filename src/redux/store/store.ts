import { configureStore } from "@reduxjs/toolkit";

import outreach from "redux/slices/outreach";

export const store = configureStore({
  reducer: {
    outreach,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
