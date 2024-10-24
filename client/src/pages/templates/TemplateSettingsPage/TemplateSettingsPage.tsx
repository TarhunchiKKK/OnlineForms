import { Checkbox, QuestionWrapper } from "@/shared/ui";
import { AvailableUsersAutocomplete } from "@/widgets/users";
import { useTemplateSettings } from "./useTemplateSettings";
import { useIntl } from "react-intl";

export function TemplateSettingsPage() {
    const { templateEditor, handleShareAccess, handleAddAvailableUser } = useTemplateSettings();

    const intl = useIntl();

    return (
        <QuestionWrapper>
            {templateEditor.template && (
                <>
                    {!templateEditor.template.publicAccess ? (
                        <div className="mb-6 w-1/3">
                            <AvailableUsersAutocomplete
                                selectedUsers={templateEditor.template.availableUsers}
                                handleAddUser={handleAddAvailableUser}
                            />
                        </div>
                    ) : (
                        <></>
                    )}

                    <Checkbox
                        isChecked={templateEditor.template.publicAccess}
                        onCheck={handleShareAccess}
                        label={intl.formatMessage({ id: "access_for_all" })}
                    />
                </>
            )}
        </QuestionWrapper>
    );
}
