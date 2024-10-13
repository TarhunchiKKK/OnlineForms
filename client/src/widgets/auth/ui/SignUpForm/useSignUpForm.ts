import { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { authApi } from "@/features/auth-with-api";
import { routes } from "@/shared/constants";
import { localStorageService } from "@/shared/services";

export function useSignUpForm() {
    const navigate = useNavigate();

    const [signUp] = authApi.useSignUpMutation();

    const [username, setUsername] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const handleUsernameChange = (e: ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value);
    };

    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    const handleSignUp = async (e: FormEvent) => {
        e.preventDefault();

        const { data } = await signUp({ username, email, password });

        if (data) {
            localStorageService.auth.setAuthToken(data.access);
            navigate(routes.Home);
        }
    };

    return {
        username,
        handleUsernameChange,
        email,
        handleEmailChange,
        password,
        handlePasswordChange,
        handleSignUp,
    };
}
