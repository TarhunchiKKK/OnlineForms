import { QuestionTypes } from "../enums/question-types.enum";

export class UpdateQuestionDto {
    id: string;

    sequenceNumber?: number;

    type?: QuestionTypes;
}
