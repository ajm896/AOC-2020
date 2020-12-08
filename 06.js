//Answer: 6703
const part1 = data => {        
  let ans = parseData1(data).map(x => x.size).reduce((a,b) => a+b)
  return ans
};

//Answer: 3430
const part2 = data => {
  let arr = parseData2(data)
  return arr.map(x => checkAnswers(x)).reduce((a,b) => a+b)
};

const parseData1 = data => {
  return data.split("\n\n")
.map(x => new Set(x.split('').filter(x=> x != '\n')))
}

const parseData2 = data => {
    return data.split("\n\n").map(x => x.split('\n'))
}

const checkAnswers = group => {

  let num = 0
  let target = group.length - 1
  // console.log(target)
  let ans = 0
  let first = group.shift().split('')
  first.forEach(i =>{
    group.forEach(j =>{
      // console.log(`does ${j} include ${i}` )
      if (j.includes(i)) num++
    })
    if (num == target) ans++
    num = 0
  })
  // console.log(first)
  // console.log(group)
  // console.log(ans)
  return ans
}

module.exports = {
  part1,
  part2
};
