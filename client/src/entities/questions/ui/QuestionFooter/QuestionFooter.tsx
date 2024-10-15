import { MdDeleteOutline } from "react-icons/md";
import { IQuestionFooterProps } from "./types";
import { iconsSize } from "./constants";
import { useQuestionsFooter } from "./useQuestionsFooter";

export function QuestionFooter({ question, questionEditor }: IQuestionFooterProps) {
    const { handleRemoveQuestion } = useQuestionsFooter(question, questionEditor);

    return (
        <div className="mt-6 flex flex-row justify-end items-center">
            <button title="Delete" onClick={handleRemoveQuestion}>
                <MdDeleteOutline size={iconsSize} />
            </button>
        </div>
    );
}
