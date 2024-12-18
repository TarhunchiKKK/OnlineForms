import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { FindManyOptions, In, Repository } from "typeorm";
import { CreateTemplateDto } from "./dto/create-template.dto";
import { UpdateTemplateDto } from "./dto/update-template.dto";
import { Template } from "./entities/template.entity";
import { TemplateNotFoundException } from "./exceptions/template-not-found.exception";
import { LikeTemplateDto } from "./dto/like-template.dto";
import { User } from "src/users/entities/user.entity";

@Injectable()
export class TemplatesService {
    constructor(
        @InjectRepository(Template) private readonly templatesRepository: Repository<Template>,
    ) {}

    public async create(createTemplateDto: CreateTemplateDto) {
        return await this.templatesRepository.save(createTemplateDto);
    }

    public async findAll(tagIds: string[]) {
        const options: FindManyOptions<Template> = {
            relations: {
                creator: true,
                tags: true,
            },
        };

        if (tagIds && tagIds.length > 0) {
            options.where = {
                tags: {
                    id: In(tagIds),
                },
            };
        }

        return await this.templatesRepository.find(options);
    }

    public async findMostPopular(count: number) {
        return (
            await this.templatesRepository.find({
                relations: {
                    creator: true,
                    tags: true,
                    forms: true,
                },
            })
        )
            .sort((a, b) => b.forms.length - a.forms.length)
            .slice(0, count);
    }

    public async findAllByUserId(userId: string) {
        return await this.templatesRepository.find({
            where: {
                creator: {
                    id: userId,
                },
            },
            relations: {
                creator: true,
            },
        });
    }

    public async findOneById(templateId: string) {
        return await this.templatesRepository.findOne({
            where: {
                id: templateId,
            },
            relations: {
                creator: true,
                tags: true,
                availableUsers: true,
            },
        });
    }

    public async update(updateTemplateDto: UpdateTemplateDto) {
        const template = await this.templatesRepository.findOne({
            where: {
                id: updateTemplateDto.id,
            },
        });

        if (!template) {
            throw new TemplateNotFoundException(updateTemplateDto.id);
        }

        return await this.templatesRepository.save(updateTemplateDto);
    }

    public async likeTemplate(dto: LikeTemplateDto) {
        const template = await this.templatesRepository.findOne({
            where: {
                id: dto.template.id,
            },
            relations: {
                likers: true,
            },
        });

        if (!template) {
            throw new TemplateNotFoundException(dto.template.id);
        }

        if (template.likers.some((liker) => liker.id === dto.user.id)) {
            template.likers = template.likers.filter((liker) => liker.id !== dto.user.id);
        } else {
            template.likers.push(dto.user as User);
        }

        return await this.templatesRepository.save(template);
    }

    public async checkIsLiked(templateId: string, userId: string) {
        const template = await this.templatesRepository.findOne({
            where: {
                id: templateId,
            },
            relations: {
                likers: true,
            },
        });

        if (!template) {
            throw new TemplateNotFoundException(templateId);
        }

        return template.likers.some((liker) => liker.id === userId);
    }
}
