
let array = [2,4,5,1];

console.log(findMinAndRemoveSorted(array));

function findMinAndRemoveSorted(array)
{
  let min = array[0];
  let minIndex = 0;

  for(let i = 0; i < array.length; i++)
  {
    if(array[i] < min)
    {
      min = array[i];
      minIndex = i;
    };
    array.splice(minIndex, 1);
    return min;
  }
}
