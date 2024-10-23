import { IFormatButtonProps } from "./types";
import { formatButtons } from "./constants";

export function FormatButtons({ editor }: IFormatButtonProps) {
    return (
        <div className="px-2 py-2 mt-2 flex flex-row justify-start items-center gap-2 w-min rounded-md shadow-md">
            {formatButtons.map((button, index) => (
                <button
                    className="p-2 rounded-md hover:bg-gray-200"
                    key={index}
                    onClick={() => button.formatFunc(editor)}
                >
                    {button.element}
                </button>
            ))}
        </div>
    );
}
