import { THaveId } from "@/shared/types";
import { TAnyQuestion, TQuestion } from "./questions";

// creating
export type TCreateQuestionDto = Omit<TQuestion, "id">;

export type TCreateAnyQuestionDto = Omit<TAnyQuestion, "id">;

// updating
export type TUpdateQuestionDto = Partial<TQuestion> & THaveId;

export type TUpdateAnyQuestionDto = Partial<TAnyQuestion> & THaveId;
