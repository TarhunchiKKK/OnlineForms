import { AuthProviders } from "@/features/auth-with-firebase";
import { Button, TextInput } from "@/shared/ui";
import { useSignUpForm } from "./useSignUpForm";
import { Link } from "react-router-dom";
import { routes } from "@/shared/constants";
import { useIntl } from "react-intl";

export function SignUpForm() {
    const {
        username,
        handleUsernameChange,
        email,
        handleEmailChange,
        password,
        handlePasswordChange,
        handleSignUp,
    } = useSignUpForm();

    const intl = useIntl();

    return (
        <form onSubmit={handleSignUp} className="w-full px-6 py-6 rounded-lg bg-green-primary">
            <h2 className="text-2xl text-white font-semibold text-center mb-6">
                {intl.formatMessage({ id: "sign_up" })}
            </h2>

            <div className="mb-4">
                <TextInput
                    label={intl.formatMessage({ id: "username" }) + ":"}
                    placeholder={intl.formatMessage({ id: "enter_your_username" })}
                    value={username}
                    onChange={handleUsernameChange}
                />
            </div>

            <div className="mb-4">
                <TextInput
                    label={intl.formatMessage({ id: "email" }) + ":"}
                    placeholder={intl.formatMessage({ id: "enter_your_email" })}
                    value={email}
                    onChange={handleEmailChange}
                />
            </div>

            <div className="mb-8">
                <TextInput
                    label={intl.formatMessage({ id: "password" })}
                    placeholder={intl.formatMessage({ id: "enter_your_password" })}
                    value={password}
                    onChange={handlePasswordChange}
                />
            </div>

            <div className="flex flex-row justify-center items-center mb-8">
                <Button size="lg" content={intl.formatMessage({ id: "sign_up" })} />
            </div>

            <p className="text-center text-white text-lg mb-4">Or continue with:</p>

            <div className="mb-6 flex flex-row justify-center items-center gap-5">
                <AuthProviders />
            </div>

            <Link to={routes.SignIn} className="block mx-auto text-center text-blue-300">
                {intl.formatMessage({ id: "already_have_account" })}
            </Link>
        </form>
    );
}
