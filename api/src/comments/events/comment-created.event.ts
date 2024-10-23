export class CommentCreatedEvent {
    public templateId: string;

    public static EventName = "comment.created";

    constructor(templateId: string) {
        this.templateId = templateId;
    }
}
