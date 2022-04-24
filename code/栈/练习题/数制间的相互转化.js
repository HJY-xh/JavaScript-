const Stack = require('../index');

/**
 * 可以利用栈将一个数字从一种数制转换成另一种数制
 */


/**
 * 
 * @param {需要被转换的值} num 
 * @param {数制/进制} base 
 * @returns {转换过来的值}
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