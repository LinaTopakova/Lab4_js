function f1(x, callback) {
    setTimeout(() => {
        const result = x * x;
        console.log(`f1(${x}) = ${result}`);
        callback(result);
    }, Math.floor(Math.random() * 1000));
}

function f2(x, callback) {
    setTimeout(() => {
        const result = 2 * x;
        console.log(`f2(${x}) = ${result}`);
        callback(result);
    }, Math.floor(Math.random() * 1000));
}

function f3(x, callback) {
    setTimeout(() => {
        const result = -2;
        console.log(`f3(${x}) = ${result}`);
        callback(result);
    }, Math.floor(Math.random() * 1000));
}

function f4(x, callback) {
    setTimeout(() => {
        const result = x * 4;
        console.log(`f4(${x}) = ${result}`);
        callback(result);
    }, Math.floor(Math.random() * 1000));
}

function f5(x, callback) {
    setTimeout(() => {
        const result = x * 5;
        console.log(`f5(${x}) = ${result}`);
        callback(result);
    }, Math.floor(Math.random() * 1000));
}

function f6(x, callback) {
    setTimeout(() => {
        const result = x * 6;
        console.log(`f6(${x}) = ${result}`);
        callback(result);
    }, Math.floor(Math.random() * 1000));
}

const functions = [f1, f2, f3, f4, f5, f6];

function Fx(x, n, callback) {
    let currentResult = x;
    let index = 0;

    function nextStep() {
        if (index < n) {
            functions[index](currentResult, (result) => {
                currentResult = result;
                index++;
                nextStep();
            });
        } else {
            console.log(`Result after ${n} steps: ${currentResult}`);
            callback();
        }
    }

    nextStep();
}

console.log('Example 1: n = 2');
Fx(3, 2, () => {
    console.log('Example 2: n = 4');
    Fx(3, 4, () => {
        console.log('Example 3: n = 6');
        Fx(3, 6, () => {
            console.log('All examples completed');
        });
    });
});
