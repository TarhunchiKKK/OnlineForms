export type TCreateCommentDto = {
    data: {
        content: string;

        template: {
            id: string;
        };
    };

    authToken: string;
};
