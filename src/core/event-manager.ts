import { EventEmitter } from 'events';

class WorkflowEventEmitter extends EventEmitter {}

export const eventEmitter = new WorkflowEventEmitter();
