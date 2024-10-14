import { Question } from "@/entities/questions";
import { TQuestionsListProps } from "./types";
import { questionEditorsFactories } from "./constants";

export function QuestionsList({ questions, context }: TQuestionsListProps) {
    const questionEditorsFactory = questionEditorsFactories[context];
    const questionEditor = questionEditorsFactory.useEditor();

    return (
        <>
            {questions.map((question) => (
                <Question
                    key={question.sequenceNumber}
                    question={question}
                    questionEditor={questionEditor}
                    context={context}
                />
            ))}
        </>
    );
}
