const BAG = "shiny gold bags"

//TODO
const part1 = data => {        
  let parsedrules = parseRules(data)
  let rules = Object.fromEntries(parsedrules)
  let bags = Object.keys(rules)

  let hits = []

  bags.forEach(x => {
    console.log(typeof rules[BAG])
      hits.push(holdGold(rules[x], rules))
  }) 
  
  return 0//hits.reduce((a,b)=>a+b)
};

const part2 = data => {
  let arr = data.split("\n")
  return arr
};

const parseRules = data => {
  return data.split("\n")
                .map(x => x.split(/(contain|,)/g))
                .map(x => x.map(y=> y.replace(/\s\d\s/g, '')))
                .map(x => x.map(y=> y.replace('.', '')))
                .map(x => x.map(y=> y.replace(' no other bags', 'no other bags')))
                .map(x => x.filter(x => x != 'contain'))
                .map(x => x.filter(x => x != ','))
                .map(x => {
                      
                      return  [x[0],x.slice(1)]
                            
               })
}

const holdGold = (bag, rules) => {
  // sleep(1000)
  console.log(rules[0])
  // holdGold(rules[''], rules)
  return 0
  // let t = bag.includes(BAG)
 


  // let f = bag.includes('no other bags')
  // console.log(f)
  // if (t) return 1
  // if (f) return 0
  // bArr.forEach(x => holdGold(x))

}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

module.exports = {
  part1,
  //part2
};
