import { Answer } from "../entities/answer.entity";

export function questionSequenceNumberSortCompareer(a: Answer, b: Answer): number {
    return a.question.sequenceNumber < b.question.sequenceNumber ? -1 : 1;
}
