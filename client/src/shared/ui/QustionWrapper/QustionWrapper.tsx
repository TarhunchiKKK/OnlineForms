import { TQustionWrapperProps } from "./types";

export function QuestionWrapper({ children }: TQustionWrapperProps) {
    return (
        <div className={`shadow-md box-border rounded-md bg-white px-8 py-6 mb-4`}>{children}</div>
    );
}
