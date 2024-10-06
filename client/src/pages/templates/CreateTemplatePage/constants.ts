import { QuestionTypes, TCreateSingleLineQuestionDto } from "@/entities/questions";
import { TemplateTopics } from "@/entities/templates";

// template
export const defaultTemplateTitle = "New form";
export const defaultTemplateDescription = "This form is about...";
export const defaultTemplateTopic = TemplateTopics.Education;

// question
export const defaultQuestion: Omit<TCreateSingleLineQuestionDto, "sequenceNumber"> = {
    type: QuestionTypes.SingleLine,
    title: "",
    answer: "",
};
