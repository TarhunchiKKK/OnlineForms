import { TUser } from "@/entities/users";
import { useSFModal } from "@/features/salesforce-integration";
import { routes } from "@/shared/constants";
import { Button } from "@/shared/ui";
import { SalesForceModal } from "@/widgets/salesforce";
import { useIntl } from "react-intl";

export const renderUserData = (user: TUser) => {
    return (
        <div className="flex flex-col justify-between items-start gap-3">
            <span>Username: {user.username ?? "-"}</span>
            <span>Email: {user.email}</span>
            <span>Status: {user.status}</span>
            <span>Role: {user.role}</span>
        </div>
    );
};

export const useCreateTabs = () => {
    const intl = useIntl();

    return [
        {
            title: intl.formatMessage({ id: "templates" }),
            route: routes.CurrentUserTemplates,
        },
        {
            title: intl.formatMessage({ id: "forms" }),
            route: routes.CurrentUserForms,
        },
    ];
};

export const SalesForceContent = () => {
    const sfModal = useSFModal();

    const intl = useIntl();

    return (
        <>
            {sfModal.isAvailable && (
                <>
                    <Button
                        content={intl.formatMessage({ id: "create_sf_account" })}
                        size="md"
                        onClick={sfModal.open}
                    />

                    {sfModal.isOpen && <SalesForceModal onClose={sfModal.close} />}
                </>
            )}
        </>
    );
};
