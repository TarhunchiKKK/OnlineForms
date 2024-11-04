import { Button, TextInput } from "@/shared/ui";
import { TSalesForceFormProps } from "./types";
import { useSalesForceForm } from "./useSalesForceForm";
import { FormEvent } from "react";
import { useIntl } from "react-intl";

export function SalesForceForm({ user, onSubmit }: TSalesForceFormProps) {
    const { formState, changeHandlers, handleSubmit } = useSalesForceForm(user);

    const submitHandler = async (e: FormEvent) => {
        e.preventDefault();

        await handleSubmit();

        onSubmit();
    };

    const intl = useIntl();

    return (
        <form className="w-full" onSubmit={submitHandler}>
            <div className="px-4 mb-6">
                <TextInput
                    value={formState.phone}
                    onChange={changeHandlers.handlePhoneChange}
                    placeholder={intl.formatMessage({ id: "phone" })}
                />
            </div>

            <div className="px-4 mb-6">
                <TextInput
                    value={formState.country}
                    onChange={changeHandlers.handleCountryChange}
                    placeholder={intl.formatMessage({ id: "country" })}
                />
            </div>

            <div className="px-4 mb-6">
                <TextInput
                    value={formState.city}
                    onChange={changeHandlers.handleCityChange}
                    placeholder={intl.formatMessage({ id: "city" })}
                />
            </div>

            <div className="px-4 mb-8">
                <TextInput
                    value={formState.street}
                    onChange={changeHandlers.handleStreetChange}
                    placeholder={intl.formatMessage({ id: "street" })}
                />
            </div>

            <div className="flex justify-center items-center">
                <Button content={intl.formatMessage({ id: "submit" })} size="md" />
            </div>
        </form>
    );
}
