// Tablas de multiplicar del 1 al 10
// 1 X 1 = 1
// 1 * 2 = 2
// 1 * 3 = 3
//...
// 1 * 10 = 10


// 2 * 1 = 2
// 2 * 2 = 4
// 2 * 10 = 20
let result = 0
for(let i = 1; i <= 10; i++){ // for grande  // i = 10s
    for(let j = 1; j <= 10; j++){ // j = 11
        result = j * i// for pequeño j = 1 // 1 * 10 = 10
        document.write(`<br>${i} X ${j} = ${result}`) // 1 X 10 = 10
    }
}