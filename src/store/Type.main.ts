import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "./store";

export const AppSelector:TypedUseSelectorHook<RootState> = useSelector