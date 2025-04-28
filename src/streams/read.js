import {createReadStream} from "node:fs";

const read = async () => {
    let data = ''
    const readerStream = createReadStream('./src/streams/files/fileToRead.txt');
    readerStream.on('data', function(chunk) {
        data += chunk
    });
    readerStream.on('end', function() {
        process.stdout.write(data);
        console.log()
    })
};

await read()
