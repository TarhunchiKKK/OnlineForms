import { AuthProviders } from "@/features/auth-via-firebase";
import { Button, TextInput } from "@/shared/ui";
import { useAuthOperation, useSignInViaEmailAndPassword } from "../../hooks";

export function SignInForm() {
    const { formMessage, authOperation, handleAuthOperationChange } = useAuthOperation();

    const { email, handleEmailChange, password, handlePasswordChange, handleSubmit } =
        useSignInViaEmailAndPassword();

    return (
        <form onSubmit={handleSubmit} className="w-full px-6 py-6 rounded-lg bg-green-primary">
            <h2 className="text-2xl text-white font-semibold text-center mb-6">{authOperation}</h2>

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
                <Button content={authOperation} />
            </div>

            <p className="text-center text-white text-lg mb-4">Or continue with:</p>

            <div className="mb-6 flex flex-row justify-center items-center gap-5">
                <AuthProviders />
            </div>

            <button
                onClick={handleAuthOperationChange}
                className="w-full text-center text-blue-300"
            >
                {formMessage}
            </button>
        </form>
    );
}
