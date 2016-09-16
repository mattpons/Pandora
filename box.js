function hello(msg) {
    let greeting1 = `Hello! ${msg}`;
    let greeting2 = 'I used to be a file in an English database!';
    return [greeting1, greeting2];
}

function bonjour(msg) {
    let greeting1 = `Bonjour! ${msg}`;
    let greeting2 = 'I used to be a file in a French database!';
    return [greeting1, greeting2];
}

function reverse(msg) {
    let greeting1 = `Hello World! ${msg}`;
    let reversedGreeting = greeting1.split('').reverse().join('');
    let greeting2 = `The previous message was reversed. The original was: ${greeting1}`;
    return [reversedGreeting, greeting2];
}

module.exports = {
    hello: hello,
    bonjour: bonjour,
    reverse: reverse
};
