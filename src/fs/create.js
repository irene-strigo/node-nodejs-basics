import { access, constants, writeFile } from 'node:fs';
const create = async () => {
    const file = './src/fs/files/fresh.txt'
    access(file, constants.F_OK, (err) => {
        if (!err) {
            throw new Error('FS operation failed');
        }
        writeFile(file, 'I am fresh and young', err => {
            if (err) {
                throw new Error('FS operation failed');
            }
        });
    });
};

await create();
