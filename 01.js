//Answer: 692916
const part1 = data => {        
  let arr = data.split("\n").map(i => parseInt(i))
  for (let i = 0; i < arr.length; i++){
    for (let j = 0; j < arr.length; j++){
      if (arr[i] + arr[j] == 2020) return arr[i] * arr[j]
    }
  }
};

//Answer: 289270976
const part2 = data => {
    let arr = data.split("\n").map(i => parseInt(i))
  for (let i = 0; i < arr.length; i++){
    for (let j = 0; j < arr.length; j++){
      for (let k = 0; k < arr.length; k++){
      if (arr[i] + arr[j] + arr[k] == 2020) return arr[i] * arr[j] * arr[k]
      }
    }
  }
};

module.exports = {
  part1,
  part2
};
