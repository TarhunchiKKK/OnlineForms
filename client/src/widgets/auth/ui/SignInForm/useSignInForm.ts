import { userSlice } from "@/entities/users";
import { authApi } from "@/features/auth-with-api";
import { routes } from "@/shared/constants";
import { localStorageService } from "@/shared/services";
import { ChangeEvent, FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export function useSignInForm() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [signIn] = authApi.useSignInMutation();

    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    const handleSignIn = async (e: FormEvent) => {
        e.preventDefault();

        const { data } = await signIn({ email, password });

        if (data) {
            dispatch(userSlice.actions.setCurrentUser(data.user));
            localStorageService.setAuthToken(data.access);
            navigate(routes.Home);
        }
    };

    return {
        email,
        handleEmailChange,
        password,
        handlePasswordChange,
        handleSignIn,
    };
}
