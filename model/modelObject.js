import { Ollama } from "ollama";

// this file use of create object of ollama
const ollama = new Ollama({
    host: "http://127.0.0.1:11434",
});

export default ollama;