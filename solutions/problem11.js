const height = [1,1]

var maxArea = function(height) {
  let left = 0; let right = height.length - 1;
  let highestArea = 0;
  while(left < right){
    highestArea = Math.max(highestArea, Math.min(height[left], height[right]) * (Math.max(1, right - left)))    
    if(height[left] < height[right]){
      left++;
    } else{
      right--;
    }
  }
  return highestArea;  
};

console.log("Area:", maxArea(height));