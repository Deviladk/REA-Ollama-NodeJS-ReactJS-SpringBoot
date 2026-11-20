let currentmodel = "qwen3.5:4b";

// This file use change model of llm 

// This function use change model of llm 
export function modelChange(newmodel) {
    currentmodel = newmodel;
}

// This function use for access current model.
export function currentModel() {
    return currentmodel;
}