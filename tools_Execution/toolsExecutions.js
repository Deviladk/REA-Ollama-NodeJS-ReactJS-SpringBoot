import fileToolsExecution from "./fileToolsExecution.js";
import changeModel from "./changeModel.js";

const toolExecutors = {

    // File and folder tools
    folderCreate: fileToolsExecution,
    folderUpdate: fileToolsExecution,
    folderDelete: fileToolsExecution,
    fileCreate: fileToolsExecution,
    fileRead: fileToolsExecution,
    fileDelete: fileToolsExecution,

    // Model tools
    modelChange: changeModel

};

export default async function toolsExecutions(name, args) {
    const executor = toolExecutors[name];

    if (!executor) {
        return {
            status: "error",
            message: `Tool not found: ${name}`
        };
    }

    return await executor(name, args);
}