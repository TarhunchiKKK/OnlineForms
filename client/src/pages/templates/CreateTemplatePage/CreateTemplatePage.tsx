import { LuPlus } from "react-icons/lu";
import { fixedQuestionsCount } from "@/features/template-editing";
import { Question } from "@/entities/questions";
import { iconsSize, questionsEditingEnabled } from "./constants";
import { useCreateTemplate } from "./useCreatetemplate";

export function CreateTemplatePage() {
    const { questions, handleAddQuestion } = useCreateTemplate();

    return (
        <>
            {questions.map((question, index) => (
                <Question
                    key={question.sequenceNumber}
                    question={question}
                    editable={questionsEditingEnabled}
                    fixed={index < fixedQuestionsCount}
                />
            ))}

            <button
                title="Add question"
                onClick={handleAddQuestion}
                className="fixed top-4 right-4 p-2 bg-white rounded-full shadow-md"
            >
                <LuPlus size={iconsSize} />
            </button>
        </>
    );
}
