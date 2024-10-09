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

export const renderQuestionByType = (question: OmitId<TAnyQuestion>, editable: boolean) => {
    switch (question.type) {
        case QuestionTypes.SingleLine:
            return (
                <SingleLineQuestion
                    question={question as TSingleLineQuestion}
                    editable={editable}
                />
            );
        case QuestionTypes.MultipleLines:
            return (
                <MultipleLinesQuestion
                    question={question as TMultipleLineQuestion}
                    editable={editable}
                />
            );
        case QuestionTypes.Checkbox:
            return (
                <CheckboxQuestion question={question as TCheckboxQuestion} editable={editable} />
            );
        case QuestionTypes.PositiveInteger:
            return (
                <PositiveIntegerQuestion
                    question={question as TPositiveIntegerQuestion}
                    editable={editable}
                />
            );
    }
};
