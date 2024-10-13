import { createEntityAdapter } from "@reduxjs/toolkit";
import { TQuestion } from "../models";

export const questionsAdapter = createEntityAdapter({
    selectId: (question: Omit<TQuestion, "id">) => question.sequenceNumber,

    sortComparer: (a, b) => (a.sequenceNumber < b.sequenceNumber ? -1 : 1),
});
