import { QuestionTypes } from "../enums/question-types.enum";

export class UpdateQuestionDto {
    id: string;

    title?: string;

    sequenceNumber?: number;

    type?: QuestionTypes;
}
