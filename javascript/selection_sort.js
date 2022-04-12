function selectionSort(arr) {
  let startArray = [...arr]
  console.log(`startArray: ${startArray}`)
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    const lowest = Math.min(...startArray)
    console.log(`lowest: ${lowest}`)
    newArray.push(lowest)
    console.log(`newArray: ${newArray}`)
    lowestIndex = startArray.indexOf(lowest)
    console.log(`lowestIndex: ${lowestIndex}`)
    startArray.splice(lowestIndex, lowestIndex)
    console.log(`startArray after splice ${startArray}`)
console.log(startArray)
    

  }
  return newArray;
}

if (require.main === module) {
  // add your own tests in here
  console.log('Expecting: [-1, 2, 3, 5]');
  console.log('=>', 

  console.log('');

  // BENCHMARK HERE, and print the average runtime
  const longInput = [];

  for (let i = 0; i < 100; ++i) {
    longInput.push(Math.random());
  }
}

module.exports = selectionSort;

// Please add your pseudocode to this file

// let new array = []
// for i in array length:
// push math.min(array.slice(i)) to array

// And a written explanation of your solution
