
let array = [2,3,4];

// console.log(findMinAndRemoveSorted(array));

function findMinAndRemoveSorted(array)
{
  let min = array[0];
  array.splice(0, 1);
  return min;
}

console.log(merge(
  [1,2,3,8],
  [6,7,8,9]
));

function merge(firstArray, secondArray)
{
  let sorted = [];
  let currentMin = firstArray[0];

  while(firstArray.length != 0 && secondArray != 0)
  {
    if(firstArray[0] <= secondArray[0])
    {
      var currentMin = findMinAndRemoveSorted(firstArray);
    } else {
      var currentMin = findMinAndRemoveSorted(secondArray);
    };
    sorted.push(currentMin);
  }

  return sorted.concat(firstArray).concat(secondArray);


}
