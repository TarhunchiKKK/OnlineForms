import { TSingleLineQuestion } from "../../models";
import { OmitId } from "../../types";

export interface ISingleLineQuestionProps {
    question: OmitId<TSingleLineQuestion>;

    editable: boolean;
}
