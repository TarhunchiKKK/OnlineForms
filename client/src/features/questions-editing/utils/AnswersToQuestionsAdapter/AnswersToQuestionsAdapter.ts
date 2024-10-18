import { TAnswer } from "@/entities/answers";
import { TAnyQuestion } from "@/entities/questions";
import { parseAnswerToQUestion } from "./helpers";

export class AnswersToQuestionsAdapter {
    public static toQuestions(answers: TAnswer[]): TAnyQuestion[] {
        return answers.map(parseAnswerToQUestion);
    }
}
