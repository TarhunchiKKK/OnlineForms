import { useAuthProviders } from "../../hooks";
import { authProviders } from "../../constants";

export function AuthProviders() {
    const { getAuthHandler } = useAuthProviders();

    return (
        <>
            {authProviders.map((provider, index) => (
                <button
                    key={index}
                    onClick={getAuthHandler(provider.provider)}
                    className="rounded-full w-12 h-12 p-1 border-green-secondary hover:bg-green-secondary-hover border-2"
                >
                    <img src={provider.icon} className="w-full h-full" />
                </button>
            ))}
        </>
    );
}
