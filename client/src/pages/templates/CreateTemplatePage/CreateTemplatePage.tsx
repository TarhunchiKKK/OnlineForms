import { Question } from "@/entities/questions";
import { useCreatetemplate } from "./useCreatetemplate";

export function CreateTemplatePage() {
    const { questions, handlers } = useCreatetemplate();

    return (
        <>
            {questions.map((question) => (
                <Question key={question.sequenceNumber} question={question} disabled={false} />
            ))}

            <button
                onClick={handlers.handleAddQuestion}
                className="fixed top-4 right-4 px-4 py-2 bg-white rounded-full shadow-md"
            >
                +
            </button>
        </>
    );
}
