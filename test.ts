let testArray = [[45,38,55],[12,34,56]];
let testArray2 = []
for (let i = 0; i < testArray.length; i++) {
    for (let j = 0; j < testArray[i].length; j++) {
        testArray2.push(testArray[i][j]);
    }
}

console.log(testArray2.sort(function(a,b){return a-b}).reverse());