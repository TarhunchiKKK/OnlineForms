import { TypedUseSelectorHook, useSelector } from "react-redux";
import { reduxStore } from "@/app/redux/store";

type AppState = ReturnType<typeof reduxStore.getState>;
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
