import { TCreateAnyQuestionDto, TCreateQuestionDto } from "../models";

export function trimQuestionsDtos(dtos: TCreateAnyQuestionDto[]): TCreateQuestionDto[] {
    return dtos.map((dto) => ({
        title: dto.title,
        type: dto.type,
        sequenceNumber: dto.sequenceNumber,
    }));
}
