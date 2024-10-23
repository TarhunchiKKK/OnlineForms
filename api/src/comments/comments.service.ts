import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { Comment } from "./entities/comment.entity";
import { CreateCommentDto } from "./dto/create-comment.dto";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class CommentsService {
    constructor(
        @InjectRepository(Comment)
        private readonly commentsRepository: Repository<Comment>,
    ) {}

    public async findTemplateComments(templateId: string) {
        return await this.commentsRepository.find({
            relations: {
                template: true,
                creator: true,
            },
            where: {
                template: {
                    id: templateId,
                },
            },
        });
    }

    public async create(dto: CreateCommentDto) {
        return await this.commentsRepository.save(dto);
    }
}
