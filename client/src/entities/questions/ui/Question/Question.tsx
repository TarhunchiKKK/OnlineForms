import { IQuestionProps } from "./types";
import { renderQuestionByType } from "./helpers";
import { QuestionHeader } from "../QuestionHeader";
import { QuestionFooter } from "../QuestionFooter";

export function Question({ question, editable, fixed }: IQuestionProps) {
    return (
        <div className={`shadow-md box-border rounded-md bg-white px-8 py-6 mb-4`}>
            <QuestionHeader question={question} />

            {renderQuestionByType(question, editable)}

            {!fixed && <QuestionFooter questionId={question.sequenceNumber} />}
        </div>
    );
}
