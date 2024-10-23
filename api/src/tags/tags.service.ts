import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Tag } from "./entities/tag.entity";
import { CreateTagDto } from "./dto/create-tag.dto";

@Injectable()
export class TagsService {
    constructor(@InjectRepository(Tag) private readonly tagsRepository: Repository<Tag>) {}

    public async findAll() {
        return await this.tagsRepository.find();
    }

    public async create(dto: CreateTagDto) {
        return await this.tagsRepository.save(dto);
    }
}
