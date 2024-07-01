const character = "#";
const count = 8;
const rows = [];
const normal = [];
const invert = [];
let inverted = true;
let style = true;

function padRow(rowNumber, rowCount) {
  return " ".repeat(rowCount - rowNumber) + character.repeat((2 * (rowNumber+1)) - 1) + " ".repeat(rowCount - rowNumber);
}

// for (let i = 1; i <= count; i++) {
//   if (inverted) {
//     rows.unshift(padRow(i, count));
//   } else {
//     rows.push(padRow(i, count));
//   }
// }

// let result = ""

// for (const row of rows) {
//   result = result + "\n" + row;
// }

// console.log(result);

//both invert and nnormal

if (style){
    for (let i = 0; i < count; i++) {
        normal.push(padRow(i, count));
        if (i != (count-1)){
            invert.unshift(padRow(i, count));
        }
        
    } 
    for (const i of normal){
        console.log(i + "\n");
    }
    for (const i of invert){
        console.log(i + "\n");
    }
} else{
    for (let i = 0; i < count; i++) {
        invert.unshift(padRow(i, count));
        if (i != 0){
            normal.push(padRow(i, count));
        }
    }
    for (const i of invert){
        console.log(i + "\n");
    }    
    for (const i of normal){
        console.log(i + "\n");
    }
}
