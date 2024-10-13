import {
    TCreateAnyQuestionDto,
    TCreateQuestionDto,
    TUpdateAnyQuestionDto,
    TUpdateQuestionDto,
} from "../models";

export function trimCreateQuestionDtos(dtos: TCreateAnyQuestionDto[]): TCreateQuestionDto[] {
    return dtos.map((dto) => ({
        title: dto.title,
        type: dto.type,
        sequenceNumber: dto.sequenceNumber,
    }));
}

export function trimUpdateQuestionDtos(dtos: TUpdateAnyQuestionDto[]): TUpdateQuestionDto[] {
    return dtos.map((dto) => ({
        id: dto.id,
        title: dto.title,
        type: dto.type,
        sequenceNumber: dto.sequenceNumber,
    }));
}
