const ROW_LEN = 31
const part1 = data => {
  
  //arr[y][x]
  let arr = data.split("\n").map(x => x.split(""))

  let x = 0
  let y = 0

  let slopeN = 3
  let slopeD = 1     
  
  let trees = []
    
  while (y + slopeD < arr.length) {
    x = (slopeN + x) % ROW_LEN
    y = slopeD + y
    if (arr[y][x] == '#') trees.push(1)
  }

  return trees.length
};

const part2 = data => {
      
  //arr[y][x]
  let arr = data.split("\n").map(x => x.split(""))
  let trees = []

  let slopes = [
    [1,1],
    [3,1],
    [5,1],
    [7,1],
    [1,2]
  ]

  let trys = []

  slopes.forEach(e =>{
    let slopeN = e[0]
    let slopeD = e[1]     
    let x = 0
    let y = 0
    let trees = []
    while (y + slopeD < arr.length) {
      x = (slopeN + x) % ROW_LEN
      y = slopeD + y
      if (arr[y][x] == '#') trees.push(1)
    }

    trys.push(trees.length)
  })
  return trys.reduce((a,b) => a*b)
};


const getLocation = (currentLoc, slopeN, slopeD) => {
  return (currentLoc + slopeN) + (ROW_LEN * slopeD);
}

module.exports = {
  part1,
  part2
};