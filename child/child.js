import { spawn } from "child_process";
const pythonProcess = spawn('python',["/../main.py", 'a', 'b']);
console.log(pythonProcess)