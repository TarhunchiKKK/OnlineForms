import { Question } from "@/entities/questions";
import { TQuestionsListProps } from "./types";

export function QuestionsList({ questions, questionsEditor, context }: TQuestionsListProps) {
    return (
        <>
            {questions.map((question) => (
                <Question
                    key={question.sequenceNumber}
                    question={question}
                    questionEditor={questionsEditor}
                    context={context}
                />
            ))}
        </>
    );
}