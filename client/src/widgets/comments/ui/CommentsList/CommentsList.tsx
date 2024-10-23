import { TextArea } from "@/shared/ui";
import { renderComment } from "./helpers";
import { useCommentsInput, useCommentsList } from "./hooks";
import { contentWrapperClassName } from "@/shared/constants";

export function CommentsList() {
    const { comments } = useCommentsList();

    const { content, handleContentChange, handleCreateComment } = useCommentsInput();

    return (
        <div className={`${contentWrapperClassName} w-1/2 mx-auto`}>
            {comments?.length ? (
                <ul className="mb-6 max-h-60 overflow-y-auto">{comments.map(renderComment)}</ul>
            ) : (
                <></>
            )}

            <form onSubmit={handleCreateComment}>
                <TextArea
                    value={content}
                    onChange={handleContentChange}
                    placeholder="Enter comment"
                />
            </form>
        </div>
    );
}
