export class CreateAnswerDto {
    line?: string;

    text?: string;

    isChacked?: boolean;

    value?: number;

    form: {
        id: string;
    };

    question: {
        id: string;
    };
}
