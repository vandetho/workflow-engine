import fs from 'fs';
import path from 'path';

export const loadWorkflow = (workflowName: string) => {
    const filePath = path.join(__dirname, '..', 'workflows', `${workflowName}.json`);
    const workflowData = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(workflowData);
};
