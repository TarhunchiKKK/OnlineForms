import { CommentsObserver } from "../comments-observer/commentsObserver";

export type TContextState = {
    observer: CommentsObserver | null;
};

export type TContextProps = {
    children: JSX.Element | JSX.Element[];
};
