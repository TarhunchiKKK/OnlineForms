import { CheckboxQuestion } from "../CheckboxQuestion";
import { MultipleLinesQuestion } from "../MultipleLinesQuestion";
import { PositiveIntegerQuestion } from "../PositiveIntegerQuestion";
import { SingleLineQuestion } from "../SingleLineQuestion";
import { OmitId, QuestionContexts } from "../../types";
import {
    QuestionTypes,
    TAnyQuestion,
    TCheckboxQuestion,
    TMultipleLineQuestion,
    TPositiveIntegerQuestion,
    TSingleLineQuestion,
} from "../../models";

export const renderQuestionByType = (question: OmitId<TAnyQuestion>, context: QuestionContexts) => {
    switch (question.type) {
        case QuestionTypes.SingleLine:
            return (
                <SingleLineQuestion question={question as TSingleLineQuestion} context={context} />
            );
        case QuestionTypes.MultipleLines:
            return (
                <MultipleLinesQuestion
                    question={question as TMultipleLineQuestion}
                    context={context}
                />
            );
        case QuestionTypes.Checkbox:
            return <CheckboxQuestion question={question as TCheckboxQuestion} context={context} />;
        case QuestionTypes.PositiveInteger:
            return (
                <PositiveIntegerQuestion
                    question={question as TPositiveIntegerQuestion}
                    context={context}
                />
            );
    }
};
