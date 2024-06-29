let rows_No = 9

let count = 0
let index = 0
let iterationCount;
let space;

let row=[]
let res=[]

res[0] = [1]
res[1] = [1,1]

let x = 3
while (x <= rows_No){
    iterationCount = x;
    while(iterationCount > 0){
        row[index] = (res[x-2][index-1] || 0) + (res[x-2][index] || 0); 
        index++;
        iterationCount--;
    }
    index = 0
    x++;
    res.push(row)
    row = []
}

if (rows_No<=5){
    space = rows_No
}else {
    space = rows_No + (rows_No - 5)
}


res.forEach((row,index)=>{
    console.log(row.join(' ').padStart(space))
    space++;
})





