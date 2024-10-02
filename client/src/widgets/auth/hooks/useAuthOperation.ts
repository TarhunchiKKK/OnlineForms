import { useState } from "react";
import { AuthOperations } from "../types";
import { formMessages } from "../constants";

export function useAuthOperation() {
    const [authOperation, setAuthOperation] = useState<AuthOperations>(AuthOperations.SignIn);

    const formMessage = formMessages[authOperation];

    const handleAuthOperationChange = () => {
        const nextOperation =
            authOperation === AuthOperations.SignIn ? AuthOperations.SignUp : AuthOperations.SignIn;
        setAuthOperation(nextOperation);
    };

    return {
        formMessage,
        authOperation,
        handleAuthOperationChange,
    };
}
