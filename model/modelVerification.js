import ollama from "./modelObject.js"

//This file use for verfication of model

// This function check model exist or not in your local system.
export default async function modelVerification(MODEL) {
    try {
        const model = await ollama.list()
        const modelExists = model.models.some(
            (model) => model.name === MODEL ||
                model.name.startsWith(MODEL)
        );


        if (!modelExists) {
            // throw new Error(
            //     `Model ${MODEL} not found. Check ollama list.`
            // );
            return false;
        }

        return true;

    } catch (error) {
        console.log("Verification failed due to ", error);
    }
}