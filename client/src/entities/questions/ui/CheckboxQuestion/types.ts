import { TCheckboxQuestion } from "../../models";
import { OmitId, QuestionContexts } from "../../types";

export interface ICheckboxQuestionProps {
    question: OmitId<TCheckboxQuestion>;

    context: QuestionContexts;
}
