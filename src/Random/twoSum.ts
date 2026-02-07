function twoSum(nums: number[], target: number): number[] {
    var diffObj = {};
    for (var i = 0; i < nums.length; i++) {
        let num = nums[i];
        if (num in diffObj) {
            return [i, diffObj[num]]
        }
        else {
            var diff = target - nums[i];
            diffObj[diff] = i;
        }
    }
};
console.log(twoSum([3, 2, 3], 6))