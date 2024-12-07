const fs = require("fs");

const input = fs.readFileSync("./input.txt", "utf-8");

function part1(input) {
  let counting = false;
  let second = false;
  let a = "";
  let b = "";
  let sum = 0;

  function defaultParams() {
    counting = false;
    second = false;
    a = "";
    b = "";
  }

  for (let i = 0; i < input.length; i++) {
    // when you see mul(
    const curr = input[i];
    const next1 = input[i + 1];
    const next2 = input[i + 2];
    const next3 = input[i + 3];

    if (curr == "m" && next1 == "u" && next2 == "l" && next3 == "(") {
      i += 3;
      counting = true;
      continue;
    }

    if ((counting || second) && curr == " ") {
      defaultParams();
      continue;
    }

    if (counting && curr != " " && curr != "," && !second) {
      // " " handles isNaN for " "
      // if string is valid number and a.length < 3 add it else default everything
      if (!isNaN(curr) && a.length < 3) {
        a += curr;
        continue;
      } else {
        defaultParams();
        continue;
      }
    }

    if (counting && a.length <= 3 && a.length >= 1 && curr == ",") {
      second = true;
      continue;
    }

    if (counting && second && curr != " " && curr != ")") {
      // " " handles isNaN for " "
      // if string is valid number and a.length < 3 add it else default everything
      if (!isNaN(curr) && b.length < 3) {
        b += curr;
        continue;
      } else {
        defaultParams();
        continue;
      }
    }

    if (counting && b.length <= 3 && curr == ")") {
      sum += parseInt(a) * parseInt(b);
      defaultParams();
    }
  }
  return sum
}


function part2(input){
    let counting = false;
    let second = false;
    let a = "";
    let b = "";
    let sum = 0;
    let action = true
  
    function defaultParams() {
      counting = false;
      second = false;
      a = "";
      b = "";
    }
  
    for (let i = 0; i < input.length; i++) {
      // when you see mul(
      const curr = input[i];
      const next1 = input[i + 1];
      const next2 = input[i + 2];
      const next3 = input[i + 3];
      const next4 = input[i + 4];
      const next5 = input[i + 5];
      const next6 = input[i + 6];

      if(curr == "d" && next1 == "o" && next2 == "n" && next3 == "'" && next4 == "t" && next5 =="(" && next6 ==")"){
        i += 6
        action = false;
        continue
      }

      if(curr == "d" && next1 == "o" && next2 == "(" && next3 == ")"){
        i += 3
        action = true;
        continue
      }
  
      if (curr == "m" && next1 == "u" && next2 == "l" && next3 == "(") {
        i += 3;
        counting = true;
        continue;
      }
  
      if ((counting || second) && curr == " ") {
        defaultParams();
        continue;
      }
  
      if (counting && curr != " " && curr != "," && !second) {
        // " " handles isNaN for " "
        // if string is valid number and a.length < 3 add it else default everything
        if (!isNaN(curr) && a.length < 3) {
          a += curr;
          continue;
        } else {
          defaultParams();
          continue;
        }
      }
  
      if (counting && a.length <= 3 && a.length >= 1 && curr == ",") {
        second = true;
        continue;
      }
  
      if (counting && second && curr != " " && curr != ")") {
        // " " handles isNaN for " "
        // if string is valid number and a.length < 3 add it else default everything
        if (!isNaN(curr) && b.length < 3) {
          b += curr;
          continue;
        } else {
          defaultParams();
          continue;
        }
      }
  
      if (counting && b.length <= 3 && curr == ")") {
        if (action) sum += parseInt(a) * parseInt(b);
        defaultParams();
      }
    }
    return sum
}

console.log(part2(input))
