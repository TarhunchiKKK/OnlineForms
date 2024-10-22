import { TAnswer } from "@/entities/answers";
import { TAnyQuestion } from "@/entities/questions";

export function parseAnswerToQUestion(answer: TAnswer): TAnyQuestion {
    if (answer.line) {
        return {
            ...answer,
            line: answer.line,
        };
    } else if (answer.text) {
        return {
            ...answer,
            text: answer.text,
        };
    } else if (answer.isChecked) {
        return {
            ...answer,
            isChecked: answer.isChecked,
        };
    } else if (answer.value) {
        return {
            ...answer,
            value: answer.value,
        };
    } else {
        return {} as TAnyQuestion;
    }
}
