import { QuestionTypes, TMultipleLineQuestion, TSingleLineQuestion } from "@/entities/questions";
import { OmitId } from "@/shared/types";

// fixed questions
export const defaultFixedQuestions = [
    {
        title: "Form title",
        type: QuestionTypes.SingleLine,
        sequenceNumber: 0,
        answer: "New form",
    } as OmitId<TSingleLineQuestion>,
    {
        title: "Form description",
        type: QuestionTypes.MultipleLines,
        sequenceNumber: 1,
        answer: "Create a new form with custom questions",
    } as OmitId<TMultipleLineQuestion>,
];

export const questionsEditingEnabled = true;

export const iconsSize = 24;
