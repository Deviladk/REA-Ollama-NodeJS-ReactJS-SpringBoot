import ollama from "../model/modelObject.js";
import { currentModel } from "../model/ModelModification.js";
import allTools from "../tools/allTools.js"
import toolsExecutions from "../tools_Execution/toolsExecutions.js"

//From this place starting place intract with AI(model of llm)
export default async function ollamaAskAgent(userMessage, history) {
    const Model = currentModel();
    const allTool = allTools();
    console.log("I am in aggentfile");
    const message = [{
        role: "user",
        content: userMessage
    }]



    for (let iteration = 0; iteration < 5; iteration++) {
        const response = await ollama.chat({
            model: Model,
            messages: message,
            tools: allTool,
            stream: false
        });

        const data = response;



        // if (!response.ok) {
        //     throw new Error(data.error || "Ollama request failed");
        // }

        const processData = response.message;
        console.log("data == ", processData);

        if (!processData?.tool_calls?.length) {
            return processData?.content || "";
        }

        console.log("-----------Skip the return---------------");
        message.push(processData);

        for (const toolCalls of processData.tool_calls) {
            const name = toolCalls.function.name;
            const args = toolCalls.function.arguments;

            console.log(`[TOOL CALL] ${name}`, args);

            try {
                const result = await toolsExecutions(name, args);

                message.push({
                    role: "tool",
                    content: JSON.stringify(result)
                });

            } catch (error) {

                message.push({
                    role: "tool",
                    content: JSON.stringify({
                        success: false,
                        error: error.message
                    })
                });
            }

        }
    }

    return "Maximum tool execution rounds reached.";

}