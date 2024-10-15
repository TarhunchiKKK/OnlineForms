import { TUpdateQuestionDto } from "../../models";

export function parseUpdateQuestionDto(dto: TUpdateQuestionDto): TUpdateQuestionDto {
    return {
        id: dto.id,
        sequenceNumber: dto.sequenceNumber,
        title: dto.title,
        type: dto.type,
    };
}
