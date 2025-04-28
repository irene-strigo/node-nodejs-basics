const parseArgs = () => {
    const argv = process.argv.slice(2);
    const args = []
    for(let i = 0; i < argv.length; i+=2) {
        args.push(`${argv[i].slice(2)} is ${argv[i+1]}`);
    }
    const result = args.join(', ')
    console.log(result);

};

parseArgs();
