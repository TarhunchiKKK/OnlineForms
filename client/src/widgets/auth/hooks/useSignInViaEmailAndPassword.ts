import { ChangeEvent, FormEvent, useState } from "react";

export function useSignInViaEmailAndPassword() {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        // Implement sign in logic here
    };

    return {
        email,
        handleEmailChange,
        password,
        handlePasswordChange,
        handleSubmit,
    };
}
