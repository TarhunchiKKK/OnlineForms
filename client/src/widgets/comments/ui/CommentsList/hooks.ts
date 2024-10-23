import { commentsApi } from "@/entities/comments";
import { CommentsContext } from "@/features/comments-creating";
import { useContextObserver } from "@/shared/hooks";
import { localStorageService } from "@/shared/services";
import { ChangeEvent, FormEvent, useState } from "react";
import { useParams } from "react-router-dom";

export function useCommentsList() {
    const { templateId } = useParams();

    const { data: comments, refetch: refetchComments } = commentsApi.useFindTemplateCommentsQuery(
        templateId!,
    );

    useContextObserver(CommentsContext, () => refetchComments());

    return { comments };
}

export function useCommentsInput() {
    const { templateId } = useParams();

    const [createComment] = commentsApi.useCreateMutation();

    const [content, setContent] = useState("");

    const handleContentChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setContent(e.target.value);
    };

    const handleCreateComment = (e: FormEvent) => {
        e.preventDefault();

        const authToken = localStorageService.auth.getAuthToken();

        createComment({
            data: {
                content,

                template: {
                    id: templateId!,
                },
            },
            authToken: authToken!,
        });

        setContent("");
    };

    return { content, handleContentChange, handleCreateComment };
}
