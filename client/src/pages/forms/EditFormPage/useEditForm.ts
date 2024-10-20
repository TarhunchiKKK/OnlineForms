import { answersApi } from "@/entities/answers";
import { formsApi } from "@/entities/forms";
import { TQuestion } from "@/entities/questions";
import { AnswersToQuestionsAdapter, useQuestions } from "@/features/questions-editing";
import { useTemplate } from "@/features/template-editing";
import { useMemo } from "react";
import { useParams } from "react-router-dom";

export function useEditForm() {
    const { formId } = useParams();

    const { data: form } = formsApi.useFindOneQuery(formId!);
    const { data: fetchedAnswers } = answersApi.useFindAllByFormIdQuery(formId!);

    const { template, handlers } = useTemplate(form?.template);

    const answers = useMemo(() => {
        if (fetchedAnswers) {
            return AnswersToQuestionsAdapter.toQuestions(fetchedAnswers);
        }
        return fetchedAnswers;
    }, [fetchedAnswers]);

    const { questions } = useQuestions(answers);

    return {
        template: {
            template,
            handlers,
            editable: false,
        },
        questions: questions as TQuestion[],
    };
}
