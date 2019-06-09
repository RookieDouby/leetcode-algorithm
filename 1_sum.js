//1. 两数之和
// 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。

// 你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。

// 示例:

// 给定 nums = [2, 7, 11, 15], target = 9

// 因为 nums[0] + nums[1] = 2 + 7 = 9
// 所以返回 [0, 1]

// Way 1
var twoSum = function(nums, target) {
    let newArr = [];
    let len = nums.length;
    for(let i = 0; i < len - 1; i ++) {
        for(let j = 0; j < len; j ++) {
            if(nums[i] + nums[j] === target) {
                newArr.push(i, j);
                return newArr;
            }
        }
    }
}

// Way 2
// 创建一个Map()，将要比较的数组中每个数所在的位置和数用Map数据结构存储起来，然后使用for循环来和map里面的数据进行比较，这里要注意一下，因为不能重复使用数组里面位置相同的数字，必须要对比一下map里面存储的位置与当前比较的数字的位置是否相同
var twoSum = function(nums, target) {
    let map = new Map();
    let arr = new Array();
    for(let i in nums) {
        map.set(nums[i], i)
    }

    for(let j = 0; j < nums.length - 1; j ++) {
        if(map.has(target - nums[j]) && j != map.get(target - nums[j])) {
            arr.push(j, Number(map.get(target - nums[j])));
            return arr
        }
    }
}


console.log(twoSum([2,3,5,7,8], 10))