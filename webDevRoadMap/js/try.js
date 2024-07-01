function sayGex(){
    console.log("Say gex!");
}

function changeName(){
    let name1 = "say";
    let name2 = "gex";
    console.log(name1 + " "+ name2);
}

function conLet(){
    const n1 = "say";
    // n1 = "gex";
    console.log(n1);
}

function showLen(){
    var gexter = "Say Gex!";
    console.log(gexter.length)
}

function createArr(){
    let something = [1, "dog"];
    console.log(something);
}

function pushed(){
    let something = [1, "dog", "cake"];
    console.log("Orig array: " + something);
    let pushed = something.push(200);
    console.log("Len of new array: " + pushed);
    console.log("New array: " + something);
    let popped = something.pop();
    console.log("Removed: "+popped);
    console.log("New array: " + something);
}

function createPyr(){
    let height = 4;
    let pyr = "#";
    let space = " ";
    let base = 7;

    for (let i = 0; i < height; i++){
        console.log(space.repeat(height-(i+1)) + pyr.repeat(base-((height-(i+1))*2)));
    }

}

function pyrBetter(){
    const height = 4;
    const base = (height*2)-1
    let space = " ";
    let pyr = "#";
    let result = [];

    for (let i = 0; i < height; i++){
        result.push(space.repeat(height-(i+1))+pyr.repeat((2*(i+1))-1));
        console.log(result[i]);
    }
    console.log(result);
}

// const character = "#";
// const count = 9;
// const rows = [];

// function padRow(rowNumber, rowCount) {
//     return " ".repeat(rowCount-rowNumber) + character.repeat(2 * rowNumber - 1);
// }

// for (let i = 0; i < count; i = i + 1) {
//     rows.push(padRow(i + 1, count));
// }
  
// let result = ""
  
// for (const row of rows) {
//     result = result + "\n" + row;
// }
  
// console.log(result);
// sayGex();
// changeName();
// conLet();
// showLen();
// createArr();
// pushed();
// createPyr();
pyrBetter();