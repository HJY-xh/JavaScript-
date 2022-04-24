const Stack = require('../index');

/**
 * @description 利用栈将一个数字从一种数制转换成另一种数制
 * @param {number} num 需要被转换的值
 * @param {number} base 数制/进制
 * @returns {string} 转换过来的值
 */
function mulBase(num, base) {
    const stack = new Stack();

    while (num > 0) {
        stack.push(num % base);
        num = Math.floor(num / base);
    }

    let result = '';

    while (stack.size() > 0) {
        result += stack.pop();
    }

    return result;
}