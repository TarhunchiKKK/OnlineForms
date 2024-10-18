import { answersApi } from "@/entities/answers";
import { formsApi } from "@/entities/forms";
import { TQuestion } from "@/entities/questions";
import { useQuestions } from "@/features/questions-editing";
import { useTemplate } from "@/features/template-editing";
import { useMemo } from "react";
import { useParams } from "react-router-dom";
import { parseAnswersToQuestions } from "./helpers";

export function useEditForm() {
    const { id: formId } = useParams();

    const { data: form } = formsApi.useFindOneQuery(formId!);
    const { data: fetchedAnswers } = answersApi.useFindAllByFormIdQuery(formId!);

    const { template, handlers } = useTemplate(form?.template);

    const answers = useMemo(() => {
        if (fetchedAnswers) {
            return parseAnswersToQuestions(fetchedAnswers);
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
