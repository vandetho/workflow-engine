export type Task = {
    id: string;
    type: TaskType;
    message?: string;
    instruction?: () => void;
    condition?: string;
    onTrue?: string;
    onFalse?: string;
};

export type TaskType = 'log' | 'asyncTask' | 'condition';
