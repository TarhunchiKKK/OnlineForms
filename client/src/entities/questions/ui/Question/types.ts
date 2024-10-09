import { TAnyQuestion } from "../../models";
import { OmitId } from "../../types";

export interface IQuestionProps {
    question: OmitId<TAnyQuestion>;

    editable: boolean;

    fixed: boolean;
}
