import { QuestionContexts } from "@/entities/questions";
import { TemplateTopics } from "@/entities/templates";

export const questionsContext = QuestionContexts.Edit;

export const templateTopicDropdownOptions = [
    {
        value: TemplateTopics.Education,
        label: "Education",
    },
    {
        value: TemplateTopics.Quiz,
        label: "Quiz",
    },
];
