import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { TQuestion } from "../models";

export const questionsAdapter = createEntityAdapter({
    selectId: (question: Omit<TQuestion, "id">) => question.sequenceNumber,

    sortComparer: (a, b) => (a.sequenceNumber < b.sequenceNumber ? -1 : 1),
});

export const questionsSlice = createSlice({
    name: "questions",
    initialState: questionsAdapter.getInitialState(),
    reducers: {
        addQuestion: questionsAdapter.addOne,
        addMultipleQuestions: questionsAdapter.addMany,
        setQuestions: questionsAdapter.setMany,
        updateQuestion: questionsAdapter.updateOne,
        upsertQuestion: questionsAdapter.upsertOne,
        deleteQuestion: questionsAdapter.removeOne,
        resetQuestions: questionsAdapter.removeAll,
    },
});
