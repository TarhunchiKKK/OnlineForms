import { TCheckboxQuestion } from "../../models";
import { OmitId } from "../../types";

export interface ICheckboxQuestionProps {
    question: OmitId<TCheckboxQuestion>;

    editable: boolean;
}
