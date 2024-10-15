import { LuPlus } from "react-icons/lu";
import { iconSize } from "./constants";
import { TAddQuestionButtonProps } from "./types";

export function AddQuestionButton({ createQuestion }: TAddQuestionButtonProps) {
    return (
        <button
            title="Add question"
            onClick={createQuestion}
            className="fixed top-4 right-4 p-2 bg-white rounded-full shadow-md"
        >
            <LuPlus size={iconSize} />
        </button>
    );
}
