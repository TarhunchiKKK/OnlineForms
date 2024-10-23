import { Context, useContext, useEffect } from "react";

type TCallback = () => void;

type TUnsubscribe = () => void;

type TObserver = {
    subscribe: (_: TCallback) => TUnsubscribe;
};

type TContextState = {
    observer: null | TObserver;
};

export function useContextObserver<T extends TContextState>(
    context: Context<T>,
    callback: TCallback,
) {
    const { observer } = useContext(context);

    useEffect(() => {
        let unsubscribe = () => {};

        if (observer) {
            unsubscribe = observer.subscribe(callback);
        }

        return () => {
            unsubscribe();
        };
    }, [observer, callback]);
}
