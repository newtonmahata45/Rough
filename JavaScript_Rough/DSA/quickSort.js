
//====================================quick sort algo===================================//
//Time complexity//         Space complexity=0(logn)
//worst TC=0(n^2)              stability:No
// avg TC=0(n*logn)            adaptive:No
//best TC=0(n*logn)

function quickSort(arr, left = 0, right = arr.length - 1){
    if (left < right){
        let pivotIndex = pivot(arr, left, right);
        quickSort(arr, left, pivotIndex - 1);
        quickSort(arr, pivotIndex + 1, right);
    }
    return arr;
}
function pivot(arr, start = 0, end = arr.length - 1){
    let pivot = arr[start];
    let swapIndex = start;

    for (let i = start + 1; i <= end; i++){
        if (pivot > arr[i]){
            swapIndex++;
            swap(arr,swapIndex, i);
          
        }
    }
    swap(arr, start, swapIndex);
    return swapIndex;
}
function swap(arr, i, j){
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

let arr=[7,5,3,4,6,0,2]
console.log(quickSort(arr, left = 0, right = arr.length - 1))





//LeetCode Q 215 :
function quickSelect(nums, k, lo, hi) {
    let pivet = getPivet(nums, lo, hi)
    if (pivet == k) { return nums[pivet] }
    else if (pivet < k) { return quickSelect(nums, k, pivet + 1, hi) }
    else if (pivet > k) { return quickSelect(nums, k, lo, pivet - 1) }
}

function getPivet(nums, lo, hi) {
    let j = lo;

    for (let i = lo; i < hi; i++) {
        if (nums[i] < nums[hi]) {
            let temp = nums[i];
            nums[i] = nums[j];
            nums[j] = temp;
            j++;
        }
    }

    let tmp = nums[hi];
    nums[hi] = nums[j];
    nums[j] = tmp;

    return j;
}
var findKthLargest = function (nums, k) {
    let lo = 0;
    let hi = nums.length - 1;

    k = nums.length - k;
    return quickSelect(nums, k, lo, hi)
};


console.log(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4))