import { answersApi } from "@/entities/answers";
import { formsApi } from "@/entities/forms";
import { TQuestion } from "@/entities/questions";
import { OperationsOnTheForm } from "@/entities/roles";
import { useAnswersEditor, useDisabledAnswersEditor } from "@/features/answers-editing";
import { AnswersToQuestionsAdapter, useQuestions } from "@/features/questions-editing";
import { checkAvailability, useUserRoleOnTheForm } from "@/features/roles-separation";
import { useUneditableTemplate } from "@/features/template-editing/hooks";
import { useMemo } from "react";
import { useParams } from "react-router-dom";

export function useEditForm() {
    const { formId } = useParams();

    const { data: form } = formsApi.useFindOneQuery(formId!);
    const { data: fetchedAnswers } = answersApi.useFindAllByFormIdQuery(formId!);

    const templateEditor = useUneditableTemplate(form?.template);

    const answers = useMemo(() => {
        if (fetchedAnswers) {
            return AnswersToQuestionsAdapter.toQuestions(fetchedAnswers);
        }
        return fetchedAnswers;
    }, [fetchedAnswers]);

    const { questions } = useQuestions(answers);

    return {
        templateEditor,
        questions: questions as TQuestion[],
    };
}

export function useFormEditor() {
    const { userRoleOnTheForm: userRole } = useUserRoleOnTheForm();

    const answersEditor = useAnswersEditor();
    const disabledAnswersEditor = useDisabledAnswersEditor();

    const questionsEditor = useMemo(() => {
        if (userRole && checkAvailability(userRole, OperationsOnTheForm.EditForm)) {
            return answersEditor;
        } else {
            return disabledAnswersEditor;
        }
    }, [userRole, answersEditor, disabledAnswersEditor]);

    return questionsEditor;
}
