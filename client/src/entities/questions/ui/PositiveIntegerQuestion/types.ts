import { TPositiveIntegerQuestion } from "../../models";
import { OmitId, QuestionContexts } from "../../types";

export interface IPositiveIntegerQuestionProps {
    question: OmitId<TPositiveIntegerQuestion>;

    context: QuestionContexts;
}
