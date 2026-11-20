import readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

//import { ollama } from "./model/modelObject";
import { currentModel } from "./model/ModelModification.js"
import modelVerification from "./model/modelVerification.js"
import ollamaAskAgent from "./agents/ollamaAgents.js"

// const ollama = ollama;

const rl = readline.createInterface({
    input,
    output,
});


async function main() {

    try {
        console.log("==================================");
        console.log(" LOCAL OLLAMA  AGENT");
        console.log("==================================");
        console.log("If you want to exit then type exit or bye")
        console.log("==================================");

        const model = currentModel();

        const isModelExist = await modelVerification(model);
        if (!isModelExist) {
            throw new Error(
                `Model ${model} not found. Check ollama list.`
            );
        }



        while (true) {
            const question = await rl.question("You: ");

            if (question.trim().toLowerCase() === "exit" || question.trim().toLowerCase() === "bye") {
                break;
            }

            if (!question.trim()) {
                continue;
            }

            try {
                const answer = await ollamaAskAgent(question);

                console.log("\n========== ANSWER ==========\n");
                console.log(answer);
                console.log("\n============================\n");

            } catch (error) {
                console.error("[ERROR]", error.message);
            }
        }
    } catch (error) {
        console.error("[STARTUP ERROR]", error.message);

    } finally {
        rl.close();
    }



}

main();