import express from 'express';
import workflow from './core/workflow';
import { executeTask } from './core/executor';

const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Workflow Engine is running');
});

app.post('/execute', (req, res) => {
    workflow.tasks.forEach(task => {
        executeTask(task);
    });

    res.send('Workflow executed');
});

app.listen(port, () => {
    console.log(`Workflow Engine listening at http://localhost:${port}`);
});
