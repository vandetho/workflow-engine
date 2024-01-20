interface WorkflowState {
    id: string;
    status: Status;
}

export type Status = 'pending' | 'in_progress' | 'completed' | 'error';

const workflowStates: { [key: string]: WorkflowState } = {};

export const initializeWorkflowState = (id: string) => {
    workflowStates[id] = { id, status: 'pending' };
};

export const updateWorkflowState = (id: string, status: WorkflowState['status']) => {
    if (workflowStates[id]) {
        workflowStates[id].status = status;
    }
};

export const getWorkflowState = (id: string) => {
    return workflowStates[id];
};
