import { TAnswer } from "@/entities/answers";
import { TAnyQuestion } from "@/entities/questions";

export function parseAnswerToQUestion(answer: TAnswer): TAnyQuestion {
    if (answer.line) {
        return {
            ...answer.question,
            id: answer.id,
            line: answer.line,
        };
    } else if (answer.text) {
        return {
            ...answer.question,
            id: answer.id,
            text: answer.text,
        };
    } else if (answer.isChecked) {
        return {
            ...answer.question,
            id: answer.id,
            isChecked: answer.isChecked,
        };
    } else if (answer.value) {
        return {
            ...answer.question,
            id: answer.id,
            value: answer.value,
        };
    } else {
        return {} as TAnyQuestion;
    }
}
