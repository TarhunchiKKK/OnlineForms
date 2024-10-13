import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TUser } from "../models";

type TUserState = {
    user: Omit<TUser, "password"> | null;
};

const initialState: TUserState = {
    user: null,
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setCurrentUser(state, action: PayloadAction<Omit<TUser, "password">>) {
            state.user = action.payload;
        },
        resetCurrentUser(state) {
            state.user = null;
        },
    },
});
