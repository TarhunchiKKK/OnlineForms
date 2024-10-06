import { createSlice } from "@reduxjs/toolkit";
import { questionsAdapter } from "./questionsAdapter";

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
