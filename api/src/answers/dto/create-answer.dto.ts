import { QuestionTypes } from "src/questions/enums/question-types.enum";

export class CreateAnswerDto {
    title: string;

    sequenceNumber: number;

    isDisplayed: boolean;

    type: QuestionTypes;

    line?: string;

    text?: string;

    isChecked?: boolean;

    value?: number;

    form: {
        id: string;
    };
}
