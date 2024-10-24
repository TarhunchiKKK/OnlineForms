import { TQuestionEditor } from "@/entities/questions";

export function useDisabledAnswersEditor(): TQuestionEditor {
    return {
        headerEditable: false,
        answerEditable: false,
        footerEnabled: false,
        create: () => {},
        update: () => {},
        remove: () => {},
    };
}
