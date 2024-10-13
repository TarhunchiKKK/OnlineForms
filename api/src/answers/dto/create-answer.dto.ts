export class CreateAnswerDto {
    line: string | null;

    text: string | null;

    isChacked: boolean | null;

    value: number | null;

    template: {
        id: string;
    };

    question: {
        id: string;
    };
}
