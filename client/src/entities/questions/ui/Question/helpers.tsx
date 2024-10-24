import { CheckboxQuestion } from "../CheckboxQuestion";
import { MultipleLinesQuestion } from "../MultipleLinesQuestion";
import { PositiveIntegerQuestion } from "../PositiveIntegerQuestion";
import { SingleLineQuestion } from "../SingleLineQuestion";
import { TQuestionEditor } from "../../types";
import {
    QuestionTypes,
    TCheckboxQuestion,
    TMultipleLineQuestion,
    TPositiveIntegerQuestion,
    TQuestion,
    TSingleLineQuestion,
} from "../../models";

export const renderQuestionByType = (question: TQuestion, questionEditor: TQuestionEditor) => {
    switch (question.type) {
        case QuestionTypes.SingleLine:
            return (
                <SingleLineQuestion
                    question={question as TSingleLineQuestion}
                    questionEditor={questionEditor}
                />
            );
        case QuestionTypes.MultipleLines:
            return (
                <MultipleLinesQuestion
                    question={question as TMultipleLineQuestion}
                    questionEditor={questionEditor}
                />
            );
        case QuestionTypes.Checkbox:
            return (
                <CheckboxQuestion
                    question={question as TCheckboxQuestion}
                    questionEditor={questionEditor}
                />
            );
        case QuestionTypes.PositiveInteger:
            return (
                <PositiveIntegerQuestion
                    question={question as TPositiveIntegerQuestion}
                    questionEditor={questionEditor}
                />
            );
    }
};
