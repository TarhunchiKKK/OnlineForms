import { LuPlus } from "react-icons/lu";
import { iconSize } from "./constants";
import { useQuestions } from "../../hooks";

export function AddQuestionButton() {
    const { handleAddQuestion } = useQuestions();

    return (
        <button
            title="Add question"
            onClick={handleAddQuestion}
            className="fixed top-4 right-4 p-2 bg-white rounded-full shadow-md"
        >
            <LuPlus size={iconSize} />
        </button>
    );
}
