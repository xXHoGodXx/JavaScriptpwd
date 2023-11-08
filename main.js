let pwd

let i = 3

while (pwd !== 7777 && i--) {

    pwd = +prompt('password')

}


// с while

// let i = 2

// while (i <= 9) {
//     document.write(i + '*' + 9 + '=' + (i * 9) + '<br>')
//     
//     i++
// }

// с do while 

let k = 2

do {
    document.write(k + '*' + 9 + '=' + (k*9) + '<br>')
    k++
} while (k <= 9)

