import { templatesApi } from "@/entities/templates";
import { TUser } from "@/entities/users";
import { useTemplateEditor } from "@/features/template-editing/hooks";
import { ChangeEvent } from "react";
import { useParams } from "react-router-dom";

export function useTemplateSettings() {
    const { templateId } = useParams();

    const { data: fetchedTemplate } = templatesApi.useFindOneQuery(templateId!);

    const templateEditor = useTemplateEditor(fetchedTemplate);

    const handleShareAccess = (e: ChangeEvent<HTMLInputElement>) => {
        templateEditor.update({
            ...templateEditor.template,
            publicAccess: e.target.checked,
        });
    };

    const handleAddAvailableUser = (user: TUser | null) => {
        if (user) {
            const availableUsers = templateEditor.template.availableUsers.find(
                (u) => u.id === user.id,
            )
                ? templateEditor.template.availableUsers.filter((u) => u.id !== user.id)
                : [...templateEditor.template.availableUsers, user];

            templateEditor.update({
                ...templateEditor.template,
                availableUsers,
            });
        }
    };

    return { templateEditor, handleShareAccess, handleAddAvailableUser };
}
