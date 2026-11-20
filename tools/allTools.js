import fileTools from "./fileTools.js";
import modelTools from "./modelTools.js";

export default function allTools() {
    const alltools = [...fileTools(), ...modelTools()];
    return alltools;
}