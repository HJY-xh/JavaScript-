const Queue = require('../index');


/**
 * @description 
 * 方块舞的舞伴分配问题：
 * 使用队列来模拟跳方块舞的人。当 男男女女来到舞池，他们按照自己的性别排成两队。
 * 当舞池中有地方空出来时，选两个队 列中的第一个人组成舞伴。他们身后的人各自向前移动一位，变成新的队首。
 * 当一对舞伴 迈入舞池时，主持人会大声喊出他们的名字。当一对舞伴走出舞池，且两排队伍中有任意 一队没人时，主持人也会把这个情况告诉大家。
 */


/** 把跳方块舞的男男女女的姓名储存在dataNames变量中 */
const dataNames = [
    "F-女舞伴 jolly",
    "F-女舞伴 Frank",
    "M-男舞伴 David",
    "M-男舞伴 Durr",
    "M-男舞伴 Martin",
    "F-女舞伴 Danny",
    "F-女舞伴 Shally",
    "M-男舞伴 Micheal",
    "M-男舞伴 Cheryl",
    "F-女舞伴 Fize",
    "F-女舞伴 Aurora"
];

/** 舞者信息存储在Dancer对象中 */
function Dancer(name, sex) {
    this.name = name;
    this.sex = sex;
}

/** ============================================================================================================ */

/** 
 *  @description 
 * 实现思路：
 * 1、将男女舞者分类，加入不同的队列
 * 2、组成舞伴，宣布结果
*/

/** 分类舞者 */
function genDancers(dataNameInfo) {
    const males = new Queue();
    const females = new Queue();

    for (const item of dataNameInfo) {
        const dancerInfo = item.trim().split(' ');
        const sex = dancerInfo[0];
        const name = dancerInfo[1];

        if (sex === 'M-男舞伴') {
            males.enqueue(new Dancer(name, sex));
        } else {
            females.enqueue(new Dancer(name, sex));
        }
    }

    return { males, females };
}


/** 组成舞伴 */
function dance(dancerInfo) {
    const { males, females } = dancerInfo;
    const map = new Map();

    while (!males.isEmpty() && !females.isEmpty()) {
        map.set(males.dequeue(), females.dequeue());
    }

    return map;
}