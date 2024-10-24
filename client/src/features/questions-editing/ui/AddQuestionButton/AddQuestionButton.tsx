import { LuPlus } from "react-icons/lu";
import { iconSize } from "./constants";
import { TAddQuestionButtonProps } from "./types";

export function AddQuestionButton({ createQuestion }: TAddQuestionButtonProps) {
    return (
        <button
            title="Add question"
            onClick={createQuestion}
            className="p-2 bg-white dark:bg-black rounded-full shadow-md"
        >
            <LuPlus size={iconSize} className="text-black dark:text-white" />
        </button>
    );
}
