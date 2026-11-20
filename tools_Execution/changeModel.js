import { modelChange } from "../model/ModelModification.js";
import ollama from "../model/modelObject.js"
import modelVerification from "../model/modelVerification.js"

//This function help to change AI model 
export default async function changeModel(name, args) {
  switch (name) {
    case "modelChange": {
      const { newModelName } = args;
      const isAvilable = await modelVerification(newModelName);
      try {
        if (isAvilable) {
          modelChange(newModelName);
        }
      } catch (error) {

      }
    }
  }
}