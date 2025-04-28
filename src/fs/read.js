import { readFile } from "node:fs";
const read = async () => {
    readFile("./src/fs/files/fileToRead.txt", function(error,data){
        if(error) {
            throw new Error('FS operation failed');
        }
        console.log(data.toString());
    });
};

await read();
