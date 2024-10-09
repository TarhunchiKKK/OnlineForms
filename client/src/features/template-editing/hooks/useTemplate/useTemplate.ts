import { TCreateTemplateDto, TemplateTopics } from "@/entities/templates";
import { useFixedQuestions } from "../useFixedQuestions";

export function useTemplate() {
    const { templateTitleQuestion, templateDescriptionQuestion } = useFixedQuestions();

    const template: Omit<TCreateTemplateDto, "questions"> = {
        title: templateTitleQuestion?.answer ?? "",

        description: templateDescriptionQuestion?.answer ?? "",

        topic: TemplateTopics.Education,

        creator: {
            id: "",
        },
    };

    return { template };
}
