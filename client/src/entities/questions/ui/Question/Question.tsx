import { IQuestionProps } from "./types";
import { QuestionHeader } from "../QuestionHeader";
import { QuestionFooter } from "../QuestionFooter";
import { QuestionWrapper } from "@/shared/ui";
import { QuestionContexts } from "../../types";
import { renderQuestionByType } from "./helpers";

export function Question({ question, context }: IQuestionProps) {
    const isEditing = context === QuestionContexts.Edit;

    return (
        <QuestionWrapper>
            <QuestionHeader question={question} context={context} />

            {renderQuestionByType(question, context)}

            {isEditing ? <QuestionFooter questionId={question.sequenceNumber} /> : <></>}
        </QuestionWrapper>
    );
}
