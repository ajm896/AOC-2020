const part1 = data => {
  let db = readData(data)

  let valid = db.filter(validCount)
  return valid.length
};

const part2 = data => {
  let db = readData(data)
  let valid = db.filter(validCount)
                .filter(byrtest)//.map(e=>console.log(e.byr))
                .filter(iyrtest)//.map(e => console.log(e.iyr))
                .filter(eyrtest)//.map(e=>console.log(e.eyr))
                .filter(hcltest)//.map(e=>console.log(e.hcl))
                .filter(ecltest)//.map(e=>console.log(e.ecl))
                .filter(pidtest)//.map(e=>console.log(e.pid))
                .filter(hgttest)//.map(e=>console.log(e.byr))


  return valid.length
};

const readData = d => {
  let db = d.split(/\n{2,}/g)
    .map(s => s.replace(/\s/g, ","))
    .map(s => s.replace("\n", ", "))
    .map(s => s.replace(/:/g, "\":\""))
    .map(s => s.replace(/,/g, "\",\""))
    .map(s => "{ \"" + s + "\" }")
    .map(s => JSON.parse(s))

  db.map(o => delete o.cid)
  return db;
}

const validCount = e => {
  return Object.values(e).length == 7;
}
const byrtest = e => {
  return e.byr >= 1920 && e.byr <= 2002;
}
const iyrtest = e => {
  return e.iyr >= 2010 && e.iyr <= 2020;
}
const eyrtest = e => {
  return e.eyr >= 2020 && e.eyr <= 2030;
}
const hcltest = e => {
  return e.hcl.search(/^#[0-9a-f]{6,}$/) == 0;
}
const ecltest = e => {
  return e.ecl.search(/^(amb|blu|brn|gry|grn|hzl|oth)$/) == 0;
}
const pidtest = e => {
  return e.pid.search(/^\d{9,9}$/) == 0;
}

const hgttest = (x) => {
  if (x.hgt.search(/cm$/) > 0) {

    let h = parseInt(x.hgt.substring(0, 4))

    return h >= 150 && h <= 193
  }

  if (x.hgt.search(/in$/) > 0) {

    let h = parseInt(x.hgt.substring(0, 3))

    return h >= 59 && h <= 76
  }

  return false
};




module.exports = {
  part1,
  part2
};