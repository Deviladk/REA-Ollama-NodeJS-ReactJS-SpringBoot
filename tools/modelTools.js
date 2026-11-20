export default function modelTools() {
    return [
        {
            type: "function",
            function: {
                name: "modelChange",
                description: "This tool help change in model of llm",
                parameters: {
                    type: "object",
                    properties: {
                        newModelName: {
                            type: "string",
                            description: "change to ai model qwen2.5-coder:7b. qwen2.5-coder:7b model name"
                        }
                    },
                    required: ["newModelName"]
                }
            }
        }
    ]
}