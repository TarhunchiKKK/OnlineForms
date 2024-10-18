export class CreateAnswerDto {
    line?: string;

    text?: string;

    isChecked?: boolean;

    value?: number;

    form: {
        id: string;
    };

    question: {
        id: string;
    };
}
