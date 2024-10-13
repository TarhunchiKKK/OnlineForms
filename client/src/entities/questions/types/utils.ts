import { TQuestion } from "../models";

export type OmitId<Type extends TQuestion> = Omit<Type, "id">;
