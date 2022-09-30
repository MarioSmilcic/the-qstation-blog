import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IUser {
  id: number;
  name: string;
}

interface IUsers {
  users: IUser[];
}

const initialState: IUsers = {
  users: [],
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUsersApi(state, action: PayloadAction<IUser[]>) {
      state.users = action.payload;
    },
  },
});

export const { addUsersApi } = usersSlice.actions;
