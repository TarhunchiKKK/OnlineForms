import { AuthProviders } from "@/features/auth-with-firebase";
import { Button, TextInput } from "@/shared/ui";
import { useSignInForm } from "./useSignInForm";
import { Link } from "react-router-dom";
import { routes } from "@/shared/constants";

export function SignInForm() {
    const { email, handleEmailChange, password, handlePasswordChange, handleSignIn } =
        useSignInForm();

    return (
        <form onSubmit={handleSignIn} className="w-full px-6 py-6 rounded-lg bg-green-primary">
            <h2 className="text-2xl text-white font-semibold text-center mb-6">Sign In</h2>

            <div className="mb-4">
                <TextInput
                    label="Email:"
                    placeholder="Enter your email address..."
                    value={email}
                    onChange={handleEmailChange}
                />
            </div>

            <div className="mb-8">
                <TextInput
                    label="Password:"
                    placeholder="Enter your password..."
                    value={password}
                    onChange={handlePasswordChange}
                />
            </div>

            <div className="flex flex-row justify-center items-center mb-8">
                <Button content="Sign In" />
            </div>

            <p className="text-center text-white text-lg mb-4">Or continue with:</p>

            <div className="mb-6 flex flex-row justify-center items-center gap-5">
                <AuthProviders />
            </div>

            <Link to={routes.SignUp} className="block mx-auto text-center text-blue-300">
                Don't have an account?
            </Link>
        </form>
    );
}
