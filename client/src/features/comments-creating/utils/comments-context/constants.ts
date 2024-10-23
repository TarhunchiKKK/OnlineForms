import { createContext } from "react";
import { TContextState } from "./types";

const initialState: TContextState = {
    observer: null,
};

export const CommentsContext = createContext(initialState);
