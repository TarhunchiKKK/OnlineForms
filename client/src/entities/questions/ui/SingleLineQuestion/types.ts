import { TSingleLineQuestion } from "../../models";
import { OmitId, QuestionContexts } from "../../types";

export interface ISingleLineQuestionProps {
    question: OmitId<TSingleLineQuestion>;

    context: QuestionContexts;
}
