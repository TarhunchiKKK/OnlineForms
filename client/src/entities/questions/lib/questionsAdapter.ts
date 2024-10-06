import { createEntityAdapter } from "@reduxjs/toolkit";
import { TAnyQuestion } from "../models";

export const questionsAdapter = createEntityAdapter({
    selectId: (question: Omit<TAnyQuestion, "id">) => question.sequenceNumber,

    sortComparer: (a, b) => (a.sequenceNumber < b.sequenceNumber ? -1 : 1),
});
