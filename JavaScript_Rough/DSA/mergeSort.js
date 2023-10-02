
function merge(nums,lo,mid,hi){
    let i =lo;
    let j = mid+1;
    let newt =[];
    while(i <= mid && j <= hi){
        if(nums[i]<=nums[j]){
            newt.push(nums[i]);
            i++;
        }
        else if(nums[i]> nums[j]){ 
            newt.push(nums[j]);
            j++;
        }

    }
    while(true){
        if(i>mid){
            newt.push(nums[j])
            j++;
            if(j>hi)break;
        }
        else if(j>hi){
            newt.push(nums[i])
            i++;
            if(i>mid)break;
        }
    }

    let x = 0;
    for(let k = lo; k <= hi; k++){
        nums[k] = newt[x];
        x++
    }
}

function mergeSort(nums,lo,hi){
    let mid = Math.floor(lo + (hi-lo)/2);
    if(lo == hi) { return }

    mergeSort(nums,lo,mid);
    mergeSort(nums,mid+1,hi);
    merge(nums,lo,mid,hi);
    return nums;
}
var sortArray = function(nums) {
    let lo = 0;
    let hi = nums.length-1;
    return mergeSort(nums,lo,hi)      

};

let x = [5,4,2,45,3,14,1]
console.log( sortArray(x))
