let rows_no = 10
let row = ''


let x = 0

while (x<rows_no){
    row += ' '
    row += '*'
    x++
}


let range = row.length


x= 0
while (x<rows_no){
    console.log(row.slice(0,range))
    x++
    range -= 2
}


