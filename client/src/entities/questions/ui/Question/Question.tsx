import { IQuestionProps } from "./types";
import { CheckboxQuestion } from "../CheckboxQuestion";
import { MultipleLinesQuestion } from "../MultipleLinesQuestion";
import { PositiveIntegerQuestion } from "../PositiveIntegerQuestion";
import { SingleLineQuestion } from "../SingleLineQuestion";
import { OmitId } from "../../types";
import {
    QuestionTypes,
    TAnyQuestion,
    TCheckboxQuestion,
    TMultipleLineQuestion,
    TPositiveIntegerQuestion,
    TSingleLineQuestion,
} from "../../models";

const renderQuestionByType = (question: OmitId<TAnyQuestion>, disabled: boolean) => {
    switch (question.type) {
        case QuestionTypes.SingleLine:
            return (
                <SingleLineQuestion
                    question={question as TSingleLineQuestion}
                    disabled={disabled}
                />
            );
        case QuestionTypes.MultipleLines:
            return (
                <MultipleLinesQuestion
                    question={question as TMultipleLineQuestion}
                    disabled={disabled}
                />
            );
        case QuestionTypes.Checkbox:
            return (
                <CheckboxQuestion question={question as TCheckboxQuestion} disabled={disabled} />
            );
        case QuestionTypes.PositiveInteger:
            return (
                <PositiveIntegerQuestion
                    question={question as TPositiveIntegerQuestion}
                    disabled={disabled}
                />
            );
    }
};

export function Question({ question, disabled }: IQuestionProps) {
    return (
        <div className="shadow-md rounded-md bg-white px-8 py-6 mb-4">
            {renderQuestionByType(question, disabled)}
        </div>
    );
}
