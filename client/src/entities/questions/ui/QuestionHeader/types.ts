import { TQuestion } from "../../models";
import { OmitId } from "../../types";

export interface IQuestionHeaderProps {
    question: OmitId<TQuestion>;
}
