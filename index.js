
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

  while(firstArray.length != 0 && secondArray != 0)
  {
    if(firstArray[0] < secondArray[0] || firstArray[0] === secondArray[0])
    {
      var currentMin = findMinAndRemoveSorted(firstArray);
      console.log(currentMin);
    } else {
      var currentMin = findMinAndRemoveSorted(secondArray);
      console.log(currentMin);
    };
    sorted.push(currentMin);
    merge(firstArray, secondArray);
  }

  console.log(sorted, firstArray, SecondArray);

  return sorted.concat(firstArray).concat(secondArray);


}
