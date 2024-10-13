import { TQuestion } from "../../models";
import { OmitId, QuestionContexts } from "../../types";

export interface IQuestionHeaderProps {
    question: OmitId<TQuestion>;

    context: QuestionContexts;
}
