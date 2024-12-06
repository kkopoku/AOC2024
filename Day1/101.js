const fs = require('fs') 


let file = fs.readFileSync('./input.txt','utf-8')

let a = []
let b = []
let c = []
let lineSplit = (file.split("\n"))


for (let i = 0; i<lineSplit.length; i++){
    a.push(lineSplit[i].split("   ")[0])
    b.push(lineSplit[i].split("   ")[1])
}

a.sort()
b.sort()

for (let i = 0; i<a.length; i++){
    let val = Math.abs(a[i] - b[i])
    c.push(val)
}

let finalDistance = 0

for (let i = 0; i<c.length; i++){
    finalDistance += c[i]
}

console.log(finalDistance)

