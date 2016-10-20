var findPeakElement = function(nums) {
    // check if corners are peaks
    if ( (nums.length === 1) || (nums[0] > nums[1])) {
        return 0;
    } 
    if ( nums[nums.length - 1] > nums[nums.length - 2] ) {
        return nums.length - 1;
    }
    
    // a corner is not a peak...
    var middleIndex = Math.floor(nums.length / 2);
    if ( (nums[middleIndex - 1] < nums[middleIndex]) && (nums[middleIndex] > nums[middleIndex +1]) ) {
        return middleIndex;
    } else if ( nums[middleIndex - 1] > nums[middleIndex] ) {
        var subArray = nums.slice(0, middleIndex);
        return findPeakElement(subArray);
    } else if ( nums[middleIndex] < nums[middleIndex +1] ) {
        var subArray = nums.slice(middleIndex);
        return middleIndex + findPeakElement(subArray);
    }
};

var test = [2,3,4,3,2,1];
console.log(findPeakElement(test));
