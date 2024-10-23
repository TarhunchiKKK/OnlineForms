import { Checkbox, QuestionWrapper } from "@/shared/ui";
import { AvailableUsersAutocomplete } from "@/widgets/users";
import { useTemplateSettings } from "./useTemplateSettings";

export function TemplateSettingsPage() {
    const { templateEditor, handleShareAccess, handleAddAvailableUser } = useTemplateSettings();

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
                        label="Access for all"
                    />
                </>
            )}
        </QuestionWrapper>
    );
}
