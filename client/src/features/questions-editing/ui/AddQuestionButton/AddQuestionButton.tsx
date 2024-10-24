import { LuPlus } from "react-icons/lu";
import { iconSize } from "./constants";
import { TAddQuestionButtonProps } from "./types";
import { useIntl } from "react-intl";

export function AddQuestionButton({ createQuestion }: TAddQuestionButtonProps) {
    const intl = useIntl();

    return (
        <button
            title={intl.formatMessage({ id: "add_question" })}
            onClick={createQuestion}
            className="p-2 bg-white dark:bg-black rounded-full shadow-md"
        >
            <LuPlus size={iconSize} className="text-black dark:text-white" />
        </button>
    );
}
