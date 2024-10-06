import { TPositiveIntegerQuestion } from "../../models";
import { OmitId } from "../../types";

export interface IPositiveIntegerQuestionProps {
    question: OmitId<TPositiveIntegerQuestion>;

    disabled: boolean;
}
