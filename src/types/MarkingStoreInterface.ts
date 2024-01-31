import Marking from '@/core/marking';

export interface MarkingStoreInterface {
    getMarking(subject: any): Marking;
    setMarking(subject: any, marking: Marking, context: { [key: string]: any }): void;
}
