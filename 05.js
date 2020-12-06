// Answer: 994
const part1 = data => {        
  let arr = data.split("\n")
  let binary = arr.map(x=> x.replace(/B/g, "1"))
                   .map(x=> x.replace(/F/g, "0"))
                   .map(x=> x.replace(/L/g, "0"))
                   .map(x=> x.replace(/R/g, "1"))
                   .sort().pop()
  return parseInt(binary,2)
};

// 741
const part2 = data => {
  let arr = data.split("\n")
    let binary = arr.map(x=> x.replace(/B/g, "1"))
                   .map(x=> x.replace(/F/g, "0"))
                   .map(x=> x.replace(/L/g, "0"))
                   .map(x=> x.replace(/R/g, "1"))
                   .map(x=> parseInt(x,2))
                   .sort()
  let seats = new Set(binary)
  let allSeats = new Set(Array.from({length: 895}, (_, i) => i + 100))

  //allseats minus seats
  let seatsLeft = new Set([...allSeats].filter(x => !seats.has(x)))
  
  // return allSeats
  // return seats
  return seatsLeft
};

module.exports = {
  part1,
  part2
};
