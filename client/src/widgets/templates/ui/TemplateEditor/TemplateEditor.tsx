import { TemplateHeader, AddQuestionButton } from "@/features/template-editing";
import { Question } from "@/entities/questions";
import { Button } from "@/shared/ui";
import { TTemplateEditorProps } from "./types";
import { questionsContext, templateTopicDropdownOptions } from "./constants";

export function TemplateEditor({ template, questions, handleSubmit }: TTemplateEditorProps) {
    return (
        <>
            <TemplateHeader
                data={template.data}
                handlers={template.handlers}
                dropdownOptions={templateTopicDropdownOptions}
            />

            {questions.data.map((question) => (
                <Question
                    key={question.sequenceNumber}
                    question={question}
                    context={questionsContext}
                />
            ))}

            <div className="w-min mx-auto">
                <Button content="Save" size="lg" onClick={handleSubmit} />
            </div>

            <AddQuestionButton />
        </>
    );
}
