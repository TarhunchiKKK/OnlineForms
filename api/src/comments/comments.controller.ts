import { Body, Controller, Get, Param, Post, Req, UseGuards } from "@nestjs/common";
import { CommentsService } from "./comments.service";
import { JwtAuthGuard } from "src/auth/guards/jwt-auth.guard";
import { TAuthorizedRequest } from "src/auth/types/request";
import { CreateCommentDto } from "./dto/create-comment.dto";
import { EventEmitter2 } from "@nestjs/event-emitter";
import { CommentCreatedEvent } from "./events/comment-created.event";

@Controller("comments")
export class CommentsController {
    constructor(
        private readonly commentsService: CommentsService,
        private readonly eventEmitter: EventEmitter2,
    ) {}

    @Get("/template/:templateId")
    public async findTemplateComments(@Param("templateId") templateId: string) {
        return await this.commentsService.findTemplateComments(templateId);
    }

    @Post()
    @UseGuards(JwtAuthGuard)
    public async create(
        @Req() request: TAuthorizedRequest,
        @Body() dto: Omit<CreateCommentDto, "creator">,
    ) {
        const comment = await this.commentsService.create({
            ...dto,
            creator: {
                id: request.user.id,
            },
        });

        this.eventEmitter.emit(CommentCreatedEvent.EventName, new CommentCreatedEvent(comment.id));

        return comment;
    }
}
