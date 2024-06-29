let rows_No = 10;
let mid = rows_No - 1

let iterationCount;
let count = 1

let row = []
let res = []

let x = 0
while(x < rows_No){
    row[mid] = count 
    iterationCount = x
    while(iterationCount>0){
        row[mid+iterationCount] = count-iterationCount;
        row[mid-iterationCount] = count-iterationCount;
        iterationCount--;
    }
    count += 2;
    res.push(row)
    row = []
    x++
}

let space = 1
for (let row of res){
    row_str = ''
    for (let no of row){
        if (no == undefined){
            row_str += ' '
            row_str += ' '
        }else {
            row_str += no
            row_str += ' '
        }
        
    }
    console.log(row_str)
}





// let space = rows_No*2-1
// let space = rows[-1]
// for (let row of res){
//     console.log(space)
//     console.log(row.join('  ').padStart(space))
//     const doubleDigits = row.filter((no)=> no>=10) 
     
//     if (doubleDigits.length >0){
//         space += doubleDigits.length
//     }else {
//         space += 2
//     }
// }

















