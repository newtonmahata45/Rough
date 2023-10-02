let ans = [-1,-1];

function newt(nums,i,j,n){
    let mid = Math.floor((i+j)/2);
    if(nums[mid]==n){
        while(nums[mid]==n){
            mid--;
        }
        ans[0] = mid+1
        return;
    }
    else if(nums[mid]>n){
        newt(nums,i,mid,n)
    }
    else{  newt(nums,mid,j,n)}
}
function newto(nums,i,j,n){
    let mid = Math.floor((i+j)/2);
    if(nums[mid]==n){
        while(nums[mid]==n){
          mid++;
        }
        return  ans[1] = mid-1
    }
    else if(nums[mid]>n){
      return newto(nums,i,mid,n)
    }
    else{ return newto(nums,mid,j,n)}
}
let nums = [5,7,7,8,8,10];
let target = 8;
newt(nums,0,nums.length-1,target)
newto(nums,0,nums.length-1,target)
console.log(ans)