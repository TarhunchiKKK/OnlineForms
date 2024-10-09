import { useAppSelector } from "@/shared/hooks";
import { useMemo } from "react";
import { fixedQuestionsCount } from "./constants";
import { OmitId } from "@/shared/types";
import { TMultipleLineQuestion, TSingleLineQuestion } from "@/entities/questions";

export function useFixedQuestions() {
    const questionsRecord = useAppSelector((state) => state.questions.entities);

    const fixedQuestions = useMemo(() => {
        const questions = Object.values(questionsRecord);
        return questions.slice(0, fixedQuestionsCount);
    }, [questionsRecord]);

    const templateTitleQuestion = fixedQuestions[0] as OmitId<TSingleLineQuestion>;
    const templateDescriptionQuestion = fixedQuestions[1] as OmitId<TMultipleLineQuestion>;

    return {
        templateTitleQuestion,
        templateDescriptionQuestion,
    };
}
