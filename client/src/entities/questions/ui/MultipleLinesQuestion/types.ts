import { TMultipleLineQuestion } from "../../models";
import { OmitId, QuestionContexts } from "../../types";

export interface IMultipleLinesQuestionProps {
    question: OmitId<TMultipleLineQuestion>;

    context: QuestionContexts;
}
