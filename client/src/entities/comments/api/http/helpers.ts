import { TComment, TFullComment } from "../../models";

export const transformFindManyResponse = (comments: TFullComment[]): TComment[] => {
    return comments.map((comment) => ({
        id: comment.id,
        content: comment.content,
        creator: comment.creator,
    }));
};
