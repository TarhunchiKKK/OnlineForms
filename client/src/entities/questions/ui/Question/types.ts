import { TAnyQuestion } from "../../models";
import { OmitId, QuestionContexts } from "../../types";

export interface IQuestionProps {
    question: OmitId<TAnyQuestion>;

    context: QuestionContexts;
}
