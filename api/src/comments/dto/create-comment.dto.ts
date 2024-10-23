export class CreateCommentDto {
    content: string;

    template: {
        id: string;
    };

    creator: {
        id: string;
    };
}
