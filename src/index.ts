import express from 'express';
import { getWorkflowState, initializeWorkflowState, updateWorkflowState } from '@/core/state-manager';
import { loadWorkflow } from '@/core/workflow-loader';
import { executeTask } from '@/core/executor';

const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Workflow Engine is running');
});

app.post('/execute/:workflowName', async (req, res) => {
    const workflowName = req.params.workflowName;
    const workflow = loadWorkflow(workflowName);

    initializeWorkflowState(workflow.id);
    updateWorkflowState(workflow.id, 'in_progress');
    for (const task of workflow.tasks) {
        await executeTask(task);
    }

    updateWorkflowState(workflow.id, 'completed');
    res.send(`Workflow ${workflowName} executed`);
});

app.get('/status/:workflowId', (req, res) => {
    const workflowId = req.params.workflowId;
    const state = getWorkflowState(workflowId);

    if (state) {
        res.json(state);
    } else {
        res.status(404).send('Workflow not found');
    }
});

app.listen(port, () => {
    console.log(`Workflow Engine listening at http://localhost:${port}`);
});
