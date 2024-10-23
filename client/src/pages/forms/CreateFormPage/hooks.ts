import { formsApi } from "@/entities/forms";
import { questionsApi, TQuestion } from "@/entities/questions";
import { templatesApi } from "@/entities/templates";
import { useQuestions } from "@/features/questions-editing";
import { useNavigate, useParams } from "react-router-dom";
import { localStorageService } from "@/shared/services";
import { useMemo, useRef } from "react";
import { QuestionsToAnswersAdapter } from "@/features/answers-editing";
import { useUneditableTemplate } from "@/features/template-editing/hooks";
import { checkAvailability, useUserRoleOnTheTemplate } from "@/features/roles-separation";
import { OperationsOnTheTemplate } from "@/entities/roles";
import { useFormEditor, useUneditableFormEditor } from "@/features/forms-creating";
import { routes } from "@/shared/constants";

export function useCreateForm() {
    const navigate = useNavigate();

    const { templateId } = useParams();
    const [createForm] = formsApi.useCreateMutation();

    const { data: fetchedTemplate } = templatesApi.useFindOneQuery(templateId!);
    const { data: fetchedQuestions } = questionsApi.useFindByTemplateQuery(templateId!);

    const templateEditor = useUneditableTemplate(fetchedTemplate);
    const { questions } = useQuestions(fetchedQuestions);

    const answers = useMemo(
        () => QuestionsToAnswersAdapter.toCreateAnswerDtos(questions as TQuestion[]),
        [questions],
    );

    const handleSaveForm = async () => {
        const authToken = localStorageService.auth.getAuthToken();

        const { data: form } = await createForm({
            data: {
                template: {
                    id: templateId!,
                },
                answers: answers,
            },
            authToken: authToken!,
        });

        if (form) {
            navigate(routes.createEditFormRoute(form.id));
        }
    };

    return {
        templateEditor,
        questions: questions as TQuestion[],
        handleSaveForm,
    };
}

export function useEditor() {
    const { userRoleOnTheTemplate: userRole } = useUserRoleOnTheTemplate();
    const submitable = useRef(false);

    const formEditor = useFormEditor();
    const disabledFormEditor = useUneditableFormEditor();

    const questionsEditor = useMemo(() => {
        if (userRole && checkAvailability(userRole, OperationsOnTheTemplate.CreateForm)) {
            submitable.current = true;
            return formEditor;
        } else {
            submitable.current = false;
            return disabledFormEditor;
        }
    }, [userRole, formEditor, disabledFormEditor]);

    return { questionsEditor, submitAvailable: submitable.current };
}
