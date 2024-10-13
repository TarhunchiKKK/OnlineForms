import { ChangeEvent } from "react";
import { QuestionTypes, TQuestion } from "../../models";
import { useDispatch } from "react-redux";
import { questionsSlice } from "../../lib";
import { OmitId } from "../../types";
import { defaultQuestions } from "./constants";

export function useQuestionHeader(question: OmitId<TQuestion>) {
    const dispatch = useDispatch();

    const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(
            questionsSlice.actions.upsertQuestion({
                ...question,
                title: e.target.value,
            }),
        );
    };

    const handleTypeChange = (type: string) => {
        const questionType = type as QuestionTypes;

        dispatch(
            questionsSlice.actions.upsertQuestion({
                ...defaultQuestions[questionType],
                // ...question,
                // type: type as QuestionTypes,
                title: question.title,
                sequenceNumber: question.sequenceNumber,
            }),
        );
    };

    return {
        handleTitleChange,
        handleTypeChange,
    };
}
