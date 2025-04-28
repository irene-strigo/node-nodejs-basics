import { rm } from "node:fs";
const remove = async () => {
    rm("./src/fs/files/fileToRemove.txt", function(error,data){
        if(error) {
            throw new Error('FS operation failed');
        }
    });
};

await remove();
