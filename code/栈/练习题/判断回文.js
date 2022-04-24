const Stack = require('../index');

/**
 * @description 判断给定字符串是否为回文
 * @param {string} word 给定的字符串˜
 * @returns {boolean}
 */
function isPalindrome(word) {
    if (word.length === 0) return false;

    const stack = new Stack();
    for (let item of word) {
        stack.push(item);
    }

    let reversedWord = ''
    while (stack.size() > 0) {
        reversedWord += stack.pop();
    }

    return word === reversedWord;
}