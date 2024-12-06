const fs = require('fs') 


let file = fs.readFileSync('./input.txt','utf-8')

let left = []
let right = []


let lineSplit = (file.split("\n"))
for (let i = 0; i<lineSplit.length; i++){
    left.push(lineSplit[i].split("   ")[0])
    right.push(lineSplit[i].split("   ")[1])
}

let leftMap = {}
for(let i=0; i<left.length; i++){
    leftMap[left[i]] = 0
}


for(let i=0; i<right.length; i++){
    let rightValue = right[i]
    if(rightValue in leftMap) leftMap[rightValue]++
}

let score = 0

for(let key of Object.keys(leftMap)){
    score += (key * leftMap[key])
}

console.log(score)