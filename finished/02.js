const part1 = data => {        
  let arr = data.split("\n").map(e=>e.split(": "))
  return arr.map(i => enforceRule1(i)).filter(x => x == 1).length;
};

const part2 = data => {
  let arr = data.split("\n").map(e=>e.split(": "))
  return arr.map(i => enforceRule2(i)).filter(x => x).length
};

const parseRule = rule => {
  let r = rule.split(" ")
  let range = r[0].split("-")
  return {
    start: range[0],
    end: range[1],
    char: r[1]
  }
}

const enforceRule1 = (entry) => {
  let {start,end,char} = parseRule(entry[0])
  let count = entry[1].split("").filter(e => e == char).length
  let t=0
  if (count >= start && count <= end) t = 1
  return t
}

const enforceRule2 = (entry) => {
  let {start,end,char} = parseRule(entry[0])
  let pass = entry[1]
  start--
  end--

  let fchar = pass.charAt(start)
  let schar = pass.charAt(end)
  if (fchar == schar) return false
  if (fchar == char)  return true
  if (schar == char) return true

  return false
}


module.exports = {
  part1,
  part2
};
