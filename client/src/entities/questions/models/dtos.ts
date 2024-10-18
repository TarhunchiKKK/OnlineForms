import { THaveId } from "@/shared/types";
import { TAnyQuestion, TQuestion } from "./questions";

// creating
export type TCreateQuestionDto = Omit<TQuestion, "id"> & { template: { id: string } };

export type TCreateAnyQuestionDto = Omit<TAnyQuestion, "id"> & { template: { id: string } };

// updating
export type TUpdateQuestionDto = Partial<TQuestion> & THaveId;

export type TUpdateAnyQuestionDto = Partial<TAnyQuestion> & THaveId;
