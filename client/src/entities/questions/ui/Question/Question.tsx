import { TemplateEditorContext } from "@/shared/types";
import { QuestionWrapper } from "@/shared/ui";
import { IQuestionProps } from "./types";
import { renderQuestionByType } from "./helpers";
import { QuestionHeader } from "../QuestionHeader";
import { QuestionFooter } from "../QuestionFooter";
import { TQuestion } from "../../models";

export function Question({ question, questionEditor, context }: IQuestionProps) {
    const isEditing = context === TemplateEditorContext.Edit;

    return (
        <QuestionWrapper>
            <QuestionHeader question={question} questionEditor={questionEditor} context={context} />

            {renderQuestionByType(question, questionEditor, context)}

            {isEditing ? (
                <QuestionFooter question={question as TQuestion} questionEditor={questionEditor} />
            ) : (
                <></>
            )}
        </QuestionWrapper>
    );
}
