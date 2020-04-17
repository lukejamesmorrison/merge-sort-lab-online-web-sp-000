
let array = [2,4,5,1];

console.log(findMinAndRemoveSorted(array));

function findMinAndRemoveSorted(array)
{
  let min = array[0];
  let minIndex = 0;

  array.splice(0, 1);
  return min;
}
