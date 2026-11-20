import fs from "node:fs/promises";

//this function guide to ai how to execute command file related
export default async function fileToolsExecution(name, args) {
    switch (name) {
        case "folderCreate": {

            try {
                const { folderPath } = args
                await fs.mkdir(folderPath);
                console.log("Folder create successful");
                return {
                    status: success,
                    message: "file create and update data",
                    fileName
                }

            } catch (error) {
                console.log("Folder creating fail due to", error);
            }
        }
        case "folderUpdate": {
            const { oldFolderPath, newFolderPath, ftype } = args

            try {

                await fs.rename(oldFolderPath, newFolderPath);
                console.log(`${ftype} Name update successful new name is ${newFolderPath}`);
                return {
                    status: success,
                    message: `${ftype} create and update data`,
                    newFolderPath
                }

            } catch (error) {
                console.log(`${ftype} update fail due to `, error);
            }
        } case "folderDelete": {
            const { folderPath } = args

            try {

                await fs.rmsync(folderPath, { recursive: true, force: true });
                console.log(`Folder delete successfully`);
                return {
                    status: success,
                    message: `Folder delete successfully`,
                }

            } catch (error) {
                console.log(`Folder delete failed due to  `, error);
            }
        }
        case "fileCreate": {
            try {
                const { fileName, content } = args;
                fs.writeFile(fileName, content, "utf-8");

                return {
                    status: success,
                    message: "file create and update data",
                    fileName
                }
            } catch (error) {
                console.log("File creating fail due to", error);
            }
        }
        case "fileRead": {
            try {
                const { filePath } = args;
                const data = fs.readFile(fileName, "utf-8");

                return {
                    status: success,
                    message: "File data sucessfully get",
                    filePath,
                    data
                }
            } catch (error) {
                console.log("File data sucessfully not get due to", error);
            }
        }
        case "fileDelete": {
            try {
                const { filePath } = args;
                fs.unlinksync(fileName);

                return {
                    status: success,
                    message: `${filePath} File deleted sucessfully`,
                }
            } catch (error) {
                console.log(`${filePath} File not delete sucessfully due to`, error);
            }
        }

    }
}