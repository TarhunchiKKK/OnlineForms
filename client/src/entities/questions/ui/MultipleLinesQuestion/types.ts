import { TMultipleLineQuestion } from "../../models";
import { OmitId } from "../../types";

export interface IMultipleLinesQuestionProps {
    question: OmitId<TMultipleLineQuestion>;

    disabled: boolean;
}
