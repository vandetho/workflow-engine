import { Workflow } from '@/types/Workflow';

const workflow: Workflow = {
    id: "1",
    tasks: [
        { id: "task1", type: "log", message: "Task 1 started" },
        { id: "task2", type: "log", message: "Task 2 started" }
        // Add more tasks as needed
    ]
};

export default workflow;
