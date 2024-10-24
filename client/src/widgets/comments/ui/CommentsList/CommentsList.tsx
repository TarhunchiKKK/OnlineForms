import { TextArea } from "@/shared/ui";
import { renderComment } from "./helpers";
import { useCommentsInput, useCommentsList } from "./hooks";
import { contentWrapperClassName } from "@/shared/constants";
import { useIntl } from "react-intl";

export function CommentsList() {
    const { comments } = useCommentsList();

    const { content, handleContentChange, handleCreateComment } = useCommentsInput();

    const intl = useIntl();

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
                    placeholder={intl.formatMessage({ id: "enter_comment" })}
                />
            </form>
        </div>
    );
}
