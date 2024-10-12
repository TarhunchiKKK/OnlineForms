import { LuPlus } from "react-icons/lu";
import { FormatableTextarea } from "@/features/text-formatting";
import { Question } from "@/entities/questions";
import { Button, Dropdown, QuestionWrapper, TextInput } from "@/shared/ui";
import { iconsSize, questionsEditingEnabled, templateTopicDropdownOptions } from "./constants";
import { useCreateTemplate } from "./useCreateTemplate";

export function CreateTemplatePage() {
    const { data, handlers } = useCreateTemplate();

    return (
        <>
            <QuestionWrapper>
                <div className="mb-6 w-[600px]">
                    <TextInput
                        placeholder="Template title"
                        value={data.title}
                        onChange={handlers.handleTitleChange}
                    />
                </div>

                <div className="mb-6 w-[800px]">
                    <FormatableTextarea
                        value={data.description}
                        onChange={handlers.handleDescriptionChange}
                    />
                </div>

                <div className="shadow-sm w-[240px]">
                    <Dropdown
                        value={data.topic}
                        onSelect={handlers.handleTopicChange}
                        options={templateTopicDropdownOptions}
                    />
                </div>
            </QuestionWrapper>

            {data.questions.map((question) => (
                <Question
                    key={question.sequenceNumber}
                    question={question}
                    editable={questionsEditingEnabled}
                />
            ))}

            <div className="w-min mx-auto">
                <Button content="Save" size="lg" onClick={handlers.handleSaveTemplate} />
            </div>

            <button
                title="Add question"
                onClick={handlers.handleAddQuestion}
                className="fixed top-4 right-4 p-2 bg-white rounded-full shadow-md"
            >
                <LuPlus size={iconsSize} />
            </button>
        </>
    );
}
