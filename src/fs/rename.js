import {rename} from "node:fs"
const renameFunc = async () => {
    rename('./src/fs/files/wrongFilename.txt', './src/fs/files/properFilename.md', (error) => {
        if (error) {
            throw new Error('FS operation failed');
        }
    });
};

await renameFunc();
