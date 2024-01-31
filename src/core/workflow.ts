import { Definition } from '@/core/Definition';
import { MarkingStoreInterface } from '@/types/MarkingStoreInterface';

export class Workflow {
    private definition: Definition;
    private markingStore: MarkingStoreInterface;
    private dispatcher;
    private name: string;
    private eventsToDispatch = null;

    constructor(
        definition: Definition,
        markingStore: MarkingStoreInterface | null = null,
        dispatcher = null,
        name = 'unnamed',
        eventsToDispatch = null,
    ) {
        this.definition = definition;
        this.markingStore = markingStore ?? new MethodMarkingStore();
        this.dispatcher = dispatcher;
        this.name = name;
        this.eventsToDispatch = eventsToDispatch;
    }
}
