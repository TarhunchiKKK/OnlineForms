import { QuestionTypes } from "../enums/question-types.enum";

export class CreateQuestionDto {
    title: string;

    sequenceNumber: number;

    type: QuestionTypes;
}
