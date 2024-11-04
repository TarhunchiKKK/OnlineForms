import { ChangeEvent, useMemo, useState } from "react";
import { TFormState, TUserData } from "./types";
import { usersApi } from "@/entities/users";
import { localStorageService } from "@/shared/services";
import { sfApi } from "@/features/salesforce-integration";

export function useSalesForceForm(user: TUserData) {
    const authToken = localStorageService.auth.getAuthToken();

    const [formState, setFormState] = useState<TFormState>({
        phone: "",
        country: "",
        city: "",
        street: "",
    });

    const [createSFAccount] = sfApi.useCreaetAccountMutation();
    const [createSFContact] = sfApi.useCreateContactMutation();
    const [updateUser] = usersApi.useUpdateMutation();

    const changeHandlers = useMemo(() => {
        return {
            handleCountryChange: (e: ChangeEvent<HTMLInputElement>) => {
                setFormState((prev) => ({
                    ...prev,
                    country: e.target.value,
                }));
            },
            handleCityChange: (e: ChangeEvent<HTMLInputElement>) => {
                setFormState((prev) => ({
                    ...prev,
                    city: e.target.value,
                }));
            },
            handleStreetChange: (e: ChangeEvent<HTMLInputElement>) => {
                setFormState((prev) => ({
                    ...prev,
                    street: e.target.value,
                }));
            },
            handlePhoneChange: (e: ChangeEvent<HTMLInputElement>) => {
                setFormState((prev) => ({
                    ...prev,
                    phone: e.target.value,
                }));
            },
        };
    }, []);

    const handleSubmit = async () => {
        const { data: account } = await createSFAccount({
            Name: user.username ?? user.email,
            BillingCountry: formState.country,
            BillingCity: formState.city,
            BillingStreet: formState.street,
        });

        if (account) {
            await Promise.all([
                createSFContact({
                    Phone: formState.phone,
                    AccountId: account.Id,
                    Email: user.email,
                    LastName: user.username ?? user.email,
                }),
                updateUser({
                    data: {
                        sfAccountId: account.Id,
                    },
                    authToken: authToken!,
                }),
            ]);
        }
    };

    return {
        formState,
        changeHandlers,
        handleSubmit,
    };
}
