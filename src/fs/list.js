import {readdir} from "node:fs";

const list = async () => {
    readdir("./src/fs/files", function(error,files){
        if(error) {
            throw new Error('FS operation failed');
        }
        for (const file of files) {
            console.log(file);
        }
    });
};

await list();
