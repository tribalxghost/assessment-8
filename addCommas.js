function addCommas(num) {
    let str = num.toLocaleString()
    return str

}

console.log(addCommas(12222222))
console.log(addCommas(12))
console.log(addCommas(122))
console.log(addCommas(1222.65))
console.log(addCommas(-10))

module.exports = addCommas
