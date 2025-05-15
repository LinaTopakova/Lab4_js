function readConfig(name, callback) {
    setTimeout(() => {
        console.log('(1) config from ' + name + ' loaded');
        callback();
    }, Math.floor(Math.random() * 1000));
}

function doQuery(statement, callback) {
    setTimeout(() => {
        console.log('(2) SQL query executed: ' + statement);
        callback();
    }, Math.floor(Math.random() * 1000));
}

function httpGet(url, callback) {
    setTimeout(() => {
        console.log('(3) Page retrieved: ' + url);
        callback();
    }, Math.floor(Math.random() * 1000));
}

function readFile(path, callback) {
    setTimeout(() => {
        console.log('(4) Readme file from ' + path + ' loaded');
        callback();
    }, Math.floor(Math.random() * 1000));
}

function callback() {
    console.log('It is done!');
}

function executeInSequence(functions) {
    const next = () => {
        if (functions.length === 0) return;
        const fn = functions.shift();
        fn(next);
    };
    next();
}

console.log('start');
executeInSequence([
    (next) => readConfig('myConfig', next),
    (next) => doQuery('select * from cities', next),
    (next) => httpGet('http://google.com', next),
    (next) => readFile('README.md', callback)
]);
console.log('end');
