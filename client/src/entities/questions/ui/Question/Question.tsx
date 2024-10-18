import { QuestionWrapper } from "@/shared/ui";
import { IQuestionProps } from "./types";
import { renderQuestionByType } from "./helpers";
import { QuestionHeader } from "../QuestionHeader";
import { QuestionFooter } from "../QuestionFooter";
import { TQuestion } from "../../models";

export function Question({ question, questionEditor }: IQuestionProps) {
    return (
        <QuestionWrapper>
            <QuestionHeader question={question} questionEditor={questionEditor} />

            {renderQuestionByType(question, questionEditor)}

            {questionEditor.footerEnabled ? (
                <QuestionFooter question={question as TQuestion} questionEditor={questionEditor} />
            ) : (
                <></>
            )}
        </QuestionWrapper>
    );
}
