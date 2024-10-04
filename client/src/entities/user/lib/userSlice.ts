import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../models";

type TUserState = {
    user: Omit<IUser, "password"> | null;
};

const initialState: TUserState = {
    user: null,
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setCurrentUser(state, action: PayloadAction<Omit<IUser, "password">>) {
            state.user = action.payload;
        },
        resetCurrentUser(state) {
            state.user = null;
        },
    },
});
