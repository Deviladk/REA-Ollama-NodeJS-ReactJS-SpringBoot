

// In this file have only File and Folder related tools avilable

export default function fileTools() {
    return [
        {
            type: "function",
            function: {
                name: "folderCreate",
                description: `This tool helps create folder 
                            Example: ./exam to create folder with name exam`,
                parameters: {
                    type: "object",
                    properties: {
                        folderPath: {
                            type: "string",
                            description: "create folder ./code. then create code folder"
                        }
                    },
                    required: ["folderPath"]
                },

            }
        },
        {
            type: "function",
            function: {
                name: "folderUpdate",
                description: `This tools help to rename of folder or file
                            this variable contain current folder or file name,
                            if extention not mention then automic take previous o same extention like .txt .java .c etc,
                                        Example: rename folder name from oldFolder to newFolder ,
                                        rename folder name from ./oldFolder to newFolder,
                                        rename folder name from oldFolder to ./newFolder,
                                        rename folder name from ./oldFolder to ./newFolder
                                        rename file name from oldFile.txt to newFile.txt,
                                        rename file name from ./oldFile.java to newFile.java,
                                        rename file name from oldFile.c to ./newFile.c
                                        rename file name from ./oldFile.cpp to ./newFile.cpp,
                                        rename file from oldfile.txt to newfile.java then changle file name with extention`,
                parameters: {
                    type: "object",
                    properties: {
                        oldFolderPath: {
                            type: "string",
                            description: `this variable contain current folder or file name`
                        },
                        newFolderPath: {
                            type: "string",
                            description: `this variable contain new folder or file name`
                        },
                        ftype: {
                            type: "string",
                            description: `change or update folder name from oldfolder to newfolder. It means ftype is folder, 
                                        change or update file name from oldfile to newfile. It means ftype is file`
                        }
                    },
                    required: ["oldFolderPath", "newFolderPath", "ftype"]
                }
            }
        },
        {
            type: "function",
            function: {
                name: "folderDelete",
                description: `This tool helps delete folder 
                            Example: delete folder ./example `,
                parameters: {
                    type: "object",
                    properties: {
                        folderPath: {
                            type: "string",
                            description: "delete folder ./code. then delete code folder"
                        }
                    },
                    required: ["folderPath"]
                },

            }
        },
        {
            type: "function",
            function: {
                name: "fileCreate",
                description: `This tool helps create file 
                            Example: create file ./exam.java. then create file exam.java,
                            update or rewrite data in ./exam.java then update data of exam.java file`,
                parameters: {
                    type: "object",
                    properties: {
                        fileName: {
                            type: "string",
                            description: `create file ./code.java. then  fileName is code.java`
                        },
                        content: {
                            type: "string",
                            description: `data to save in file. `
                        },

                    },
                    required: ["fileName", "content"]
                },

            }
        },
        {
            type: "function",
            function: {
                name: "fileRead",
                description: `
                    Read data from a local file.
                    Use this tool when the user asks about
                    personal information such as my name, age,
                    address or other information stored in a personalData.json file.
                `,
                parameters: {
                    type: "object",
                    properties: {
                        filePath: {
                            type: "string",
                            description: "Path of the file to read"
                        }
                    },
                    required: ["filepath"]
                }
            }
        },
        {
            type: "function",
            function: {
                name: "fileDelete",
                description: `This tool helps delete file 
                            Example: delete file ./example , delete file ./example.java, delete file ./example.txt, `,
                parameters: {
                    type: "object",
                    properties: {
                        filePath: {
                            type: "string",
                            description: "delete file ./code. then delete code file"
                        }
                    },
                    required: ["filePath"]
                },

            }
        },
    ]
}