
let array = [2,4,5,1];

findMinAndRemoveSorted(array);

function findMinAndRemoveSorted(array)
{
  let min = array[0];
  let minIndex = 0;

  for(let i = 0; i < array.length; i++)
  {
    if(array[0] < min)
    {
      min = array[0];
      minIndex = i;
    };
    array.splice(minIndex, 1);
    return min;
  }
}
