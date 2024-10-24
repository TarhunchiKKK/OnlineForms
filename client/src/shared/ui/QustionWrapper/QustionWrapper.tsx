import { TQustionWrapperProps } from "./types";

export function QuestionWrapper({ children }: TQustionWrapperProps) {
    return (
        <div className={`shadow-md box-border rounded-md bg-white dark:bg-black px-8 py-6 mb-4`}>
            {children}
        </div>
    );
}
