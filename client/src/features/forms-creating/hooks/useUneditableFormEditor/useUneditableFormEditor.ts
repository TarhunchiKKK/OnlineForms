import { TQuestionEditor } from "@/entities/questions";

export function useUneditableFormEditor(): TQuestionEditor {
    return {
        headerEditable: false,
        answerEditable: false,
        footerEnabled: false,
        update: () => {},
        create: () => {},
        remove: () => {},
    };
}
