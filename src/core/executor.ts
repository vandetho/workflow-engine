import { Task } from '@/types/Task';

export const executeTask = (task: Task) => {
    if (task.type === "log") {
        console.log(task.message);
    }
};
