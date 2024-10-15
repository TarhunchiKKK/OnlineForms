import { TAnyQuestion } from "@/entities/questions";

export function getNextSequenceNumber(questionsRecord: Record<number, Omit<TAnyQuestion, "id">>) {
    const sequenceNumbers = Object.keys(questionsRecord).map(Number);

    if (sequenceNumbers.length === 0) {
        return 0;
    }

    const maxSequencNumber = Math.max(...sequenceNumbers);

    return maxSequencNumber + 1;
}
