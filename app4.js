let rows_no = 10
let row = []

let count = 1
let iterationCount;
let x = 0

while (x < rows_no){
    iterationCount = x+1
    while (iterationCount > 0){
        row.push(count);
        count++
        iterationCount--
    }
    console.log(row.join(' '))
    row = []
    x++
}