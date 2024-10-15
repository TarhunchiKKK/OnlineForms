import { z } from "zod";
import { QuestionTypes } from "../enums/question-types.enum";

export const UpdateQuestionDtoSchema = z.object({
    id: z.string(),

    title: z.string().optional(),

    sequenceNumber: z.number().optional(),

    type: z.nativeEnum(QuestionTypes).optional(),
});

export type UpdateQuestionDto = z.infer<typeof UpdateQuestionDtoSchema>;
