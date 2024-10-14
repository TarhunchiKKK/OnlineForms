import { useDispatch } from "react-redux";
import { IQuestionFooterProps } from "./types";
import { MdDeleteOutline } from "react-icons/md";
import { questionsSlice } from "../../lib";
import { iconsSize } from "./constants";

export function QuestionFooter({ question }: IQuestionFooterProps) {
    const dispatch = useDispatch();

    const handleDeleteQuestion = () => {
        dispatch(questionsSlice.actions.deleteQuestion(question.sequenceNumber));
    };

    return (
        <div className="mt-6 flex flex-row justify-end items-center">
            <button title="Delete" onClick={handleDeleteQuestion}>
                <MdDeleteOutline size={iconsSize} />
            </button>
        </div>
    );
}
