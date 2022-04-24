function Queue() {
    this.items = [];
}

/** 入队 */
Queue.prototype.enqueue = function (element) {
    this.items.push(element);
}

/** 出队，并返回被移除的元素 */
Queue.prototype.dequeue = function () {
    return this.items.shift();
}

/** 返回队列中的第一个元素 */
Queue.prototype.front = function () {
    return this.items[0];
}

/** 返回队列中的第一个元素 */
Queue.prototype.back = function () {
    return this.items[this.items.length - 1];
}

/** 检查队列是否为空 */
Queue.prototype.isEmpty = function () {
    return this.items.length === 0;
}

/** 返回队列包含的元素个数 */
Queue.prototype.size = function () {
    return this.items.length;
}

/** 将队列的内容格式化输出 */
Queue.prototype.toString = function () {
    let result = '';
    for(let item of this.items) {
        result += `${item} `
    }
    return result;
}

module.exports = Queue;