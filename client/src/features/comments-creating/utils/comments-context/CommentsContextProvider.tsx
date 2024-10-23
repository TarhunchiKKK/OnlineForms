import { useMemo } from "react";
import { TContextProps } from "./types";
import { CommentsObserver } from "../comments-observer";
import { useParams } from "react-router-dom";
import { CommentsContext } from "./constants";

export function CommentsContextProvider({ children }: TContextProps) {
    const { templateId } = useParams();

    const observer = useMemo(() => new CommentsObserver(templateId!), [templateId]);

    return <CommentsContext.Provider value={{ observer }}>{children}</CommentsContext.Provider>;
}
