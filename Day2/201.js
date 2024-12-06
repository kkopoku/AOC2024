const fs = require("fs")

let fileString = fs.readFileSync('./input.txt', "utf-8")
let inputs = fileString.split("\n")

let finalInputs = []
for( let item of inputs){
    finalInputs.push(item.split(" ").map((Number)))
}


function checkSafe(list){
    let dir
    let listLen = list.length
    for(let j=0; j<listLen; j++){

        let lbo = (j === listLen-2)
        let first = (j === 0)
        let curr = list[j]
        let next = list[j+1]
        let diff = Math.abs(curr-next)

        if(first){
            // if first set the direction
            dir = (curr < next) ? "increasing" : (curr > next) ? "decreasing" : "equal"
            if(dir === "equal"){
                return false
            }
        }

        if((dir === "increasing" && (curr > next)) || (dir === "decreasing" && (curr < next) || (diff>3) || (diff==0))){
            return false
        }

        if(lbo) return true
    }
}


const part1 = (finalInputs) => {

    let safeCount = 0
    for (let i=0; i<finalInputs.length; i++){
        const currList = finalInputs[i]
        if(checkSafe(currList)) safeCount++
    }
    return safeCount

}


/**
 * 
 * @param {Array<Array>} inputs 
 * @returns 
 */
const part2 = (inputs) => {
    let safeCount = 0
    for (item of inputs){

        if(checkSafe(item)){
            safeCount++
            continue
        }

        // remove each item from array and run safecheck
        for(let i=0; i<item.length; i++){
            let dampenerArray = [...item.slice(0,i), ...item.slice(i+1)]
            if (checkSafe(dampenerArray)){
                safeCount++
                break
            }
        }
    }

    return safeCount
}


// running functions here
console.log(part1(finalInputs))
console.log(part2(finalInputs))
