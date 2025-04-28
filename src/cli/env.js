const parseEnv = () => {
    const vars = Object.keys(process.env).reduce((acc, key) => {
        if (key.startsWith('RSS_')) {
            acc.push(`${key}=${process.env[key]}`);
        }
        return acc
    }, []).join('; ');
    console.log(vars);
};

parseEnv();
