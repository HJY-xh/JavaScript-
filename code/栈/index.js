function Stack() {
    this.items = [];
}

/** 入栈 */
Stack.prototype.push = function (element) {
    this.items.push(element);
}

/** 出栈，并返回栈顶元素 */
Stack.prototype.pop = function () {
    return this.items.pop();
}

/** 查看栈顶元素 */
Stack.prototype.peek = function () {
    return this.items[this.items.length - 1];
}

/** 检查栈是否为空 */
Stack.prototype.isEmpty = function () {
    return this.items.length === 0;
}

/** 查看栈的长度 */
Stack.prototype.size = function () {
    return this.items.length;
}

/** 输出格式化内容 */
Stack.prototype.toString = function () {
    let result = '';
    for (let item of this.items) {
        result = `${result} ${item}`;
    }
    return result;
}

module.exports = Stack;