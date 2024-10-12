import { IQuestionProps } from "./types";
import { renderQuestionByType } from "./helpers";
import { QuestionHeader } from "../QuestionHeader";
import { QuestionFooter } from "../QuestionFooter";
import { QuestionWrapper } from "@/shared/ui";

export function Question({ question, editable }: IQuestionProps) {
    return (
        <QuestionWrapper>
            <QuestionHeader question={question} />

            {renderQuestionByType(question, editable)}

            <QuestionFooter questionId={question.sequenceNumber} />
        </QuestionWrapper>
    );
}
