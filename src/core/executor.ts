export const executeTask = async (task: any, workflowContext?: any) => {
    try {
        switch (task.type) {
            case 'log':
                console.log(task.message);
                break;
            case 'condition':
                const conditionResult = evalCondition(task.condition, workflowContext);
                return conditionResult ? task.onTrue : task.onFalse;
            case 'asyncTask':
                await performAsyncOperation(task);
                break;
        }
    } catch (error) {
        console.error(`Error executing task ${task.id}:`, error);
    }
};

export const executeParallelTasks = async (tasks: any[]) => {
    return Promise.all(tasks.map((task) => executeTask(task)));
};

const performAsyncOperation = async (task: any) => {
    return new Promise((resolve) => setTimeout(resolve, 1000));
};

const evalCondition = (condition: string, context?: any) => {
    // Caution: Using eval can be dangerous. Be sure to sanitize and secure this appropriately.
    return eval(condition);
};
