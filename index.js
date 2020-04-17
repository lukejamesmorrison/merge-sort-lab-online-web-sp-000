
let array = [2,3,4];

// console.log(findMinAndRemoveSorted(array));

function findMinAndRemoveSorted(array)
{
  let min = array[0];
  array.splice(0, 1);
  return min;
}

// console.log(merge(
//   [1,2,3,8],
//   [6,7,8,9]
// ));

function merge(firstArray, secondArray)
{
  let sorted = [];
  let currentMin = firstArray[0];

  while(firstArray.length != 0 && secondArray != 0)
  {
    if(firstArray[0] <= secondArray[0])
    {
      currentMin = findMinAndRemoveSorted(firstArray);
    } else {
      currentMin = findMinAndRemoveSorted(secondArray);
    };
    sorted.push(currentMin);
  };
  return sorted.concat(firstArray).concat(secondArray);
}

mergeSort([2,5,1,7,8,9,3]);

function mergeSort(array)
{
  let mid = array.length/2;
  let firstHalf = array.slice(0, mid);
  let secondHalf = array.slice(mid, array.length);

  console.log(merge(firstHalf, secondHalf));

  // while(firstHalf.length != 0 && secondHalf.length != 0)
  // {
  //
  // }
}
