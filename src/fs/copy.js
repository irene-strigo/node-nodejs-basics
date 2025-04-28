import {cp, stat} from "node:fs"
const copy = async () => {
    stat('./src/fs/files_copy', function(err) {
        if (!err) {
            throw new Error('FS operation failed');
        }

    });
    cp('./src/fs/files', './src/fs/files_copy', { recursive: true }, error => {
        if (error) {
            throw new Error('FS operation failed');
        }
    });
};

await copy();
