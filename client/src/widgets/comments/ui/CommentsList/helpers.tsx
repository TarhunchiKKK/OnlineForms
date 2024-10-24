import { TComment } from "@/entities/comments";

export const renderComment = (comment: TComment) => {
    return (
        <li
            key={comment.id}
            className="rounded-md px-3 py-2 bg-green-secondary dark:bg-green-primary-dark mb-3 last:mb-0"
        >
            <p className="font-bold mb-2">{comment.creator.username ?? comment.creator.email}</p>

            <p className="">{comment.content}</p>
        </li>
    );
};
