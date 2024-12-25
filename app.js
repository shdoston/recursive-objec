// function getInitialOdds(n){
// let ansver = []
// for(let i =0; i < n; i++){
//     ansver.length == 0 ? ansver.push(1) : ansver.push(ansver.at(-1)+2)
// }
// return ansver
// }

// console.log(getInitialOdds(5))
// 2
// let arr = [4,5,7,8,6,9]
// function getEvenReverse(arr){
//     let ansver = []
//     for (let i = 0; i <arr.length; i++){
// if (arr[i] % 2 ==0) ansver.push(arr[i])
//     }
// return ansver.reverse(ansver)
// }
// console.log(getEvenReverse(arr))
//  3
// const arr= [4, 5, 7, 8, 6, 9]
// let text = ''
// for (let i = 0; i < arr.length; i++){
//     text += `${arr[i]}${arr[arr.length-(i+1)]}`
    
// }
// console.log(text)
// let arr = [1, 6, 9, 5, 8, 10, 15]
// let result = 0
// function rangeSum(arr, K, L) {
//     for (let i = K; i <=L; i++){
//         result += (arr[i])
//     }
//     return result
// }
// console.log(rangeSum(arr,2,5))

// let arr =  [7, 4, 2, 3, 1, 4, 5, 2, 4, 5, 7]
// let alone = [];
// for (let i = 0; i <arr.length; i++){
//     !alone.includes(arr[i]) && alone.push(arr[i])
// }
// console.log(alone)
// let arr = [7, 4, 9, 2, 3, 1, 5]
// let max = 0
// let min ;
// for (let i = 0; i <arr.length; i++){
//     if (arr[i] > max) max =arr[i] 
//  if (min == undefined || min > arr[i]) min= arr[i]
// }
// console.log(min,max)

// uy ishi
// 1
// function getLevel2(n){
//     let result = []
//     for (let i = 1; i <= n; i++){
//         result.push(2 **i)
//     }
//     return result
// }
// console.log(getLevel2(5))


// 2
// let n= 5
// let a = 2
// let b= 3
// let ansver = [a,b]
// for (let i = 0; i<n-2; i++){
// let counter= 0
// for( let k= 0; k<ansver.length; k++){
//     counter+= ansver[k]
// }
// ansver.push(counter)
// }
// console.log(ansver)
// function tesksriMasiv (arr){
// let result = [1,2,3,4,5]
//    return result.reverse()   
// }

// let s = tesksriMasiv(5)
// console.log(s)

// ansver.length == 0 ? ansver.push(1) : ansver.push(ansver.at(-1)+2)
// let arr = [4, 5, 7, 8, 6, 9]
// function findOddNumbers(arr) {
//     let oddNumbers = []
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 !== 0) {
//             oddNumbers.push(arr[i])
//         }
//         }
//     console.log(oddNumbers + ' toqlar soni = ' + oddNumbers.length);
// }
// findOddNumbers(arr);


// let arr = [ 4, 5, 7, 8, 6, 9]
// function findOddNumbers(arr) {
//     let result = []
//     let kam = []
//     for (let i = 0; i <arr.length; i++){
//         if (arr[i] %2==0)
//             result.push(arr[i])
//         if (arr[i] %2!==0)
//             kam.push(arr[i]) 
//     }
//     console.log(result.reverse().join(),kam.reverse().join())
// }
// findOddNumbers(arr)
// 6 t
// let arr = [1,2,3,4,5,6]
// let result = []
// function juftFunction () {
//     for (let i = arr.length-1; i > 0; i-=2){
//         result.push(arr[i])
//     }
// return result
// }
// let s= juftFunction()
// console.log(s)
// 7
// let arr = [1,2,3,4,5,6]
// let ju = []
// let uj = []
// function juftArr (arr) {
// for (let i =0 ; i <arr.length; i++){
//     if(arr[i]%2===0)
//         ju.push(arr[i])
//     if (arr[i]%2!==0) 
//         uj.push(arr[i])
// }
// console.log(`${ju},${uj}`)
// }
// juftArr (arr)
// 8
// let sum = [2,3,4,5,6,7,8,9]
// function juftArr (arr) {
//     let juf = arr.filter((_,index)=>index%2===0).sort((a,b)=>b-a)
//     let mus = arr.filter((_,index)=>index%2!==0).sort((a,b)=>a-b)
//     return juf.concat(mus)
// }
// let s = juftArr(sum)
// console.log(s)

// 9
// let toqlar = [3,2,5,6,7,8,10]
// function juftToq (arr) {
// let result = arr.filter((_,index)=>index%2===0).sort((a,b)=> a-b)
// let sem = arr.filter((_,index)=>index%2!==0).sort((a,b)=>b-a)
// return result.concat(sem)

// }
// let s = juftToq(toqlar)
// console.log(s)
// let arr = [2,3,4,5,6,7,8,9]
// function juftToq (arr) {
//     for(let i = 0; i>arr.length; i++ )
// return arr[i]
// } 
// let s= juftToq (arr)
// console.log(s)
// 11
// let arr = [1, 6, 9, 5, 8, 10, 15]
// let result = 0
// function rangeSum(arr, K, L) {
//     for (let i = K; i <=L; i++){
//         result += (arr[i])
//     }
//     return result
// }
// console.log(rangeSum(arr,2,6))

// let arr = ['abdulaziz',10,false,null]
// let truthy = []
// let falsey = []
// for(let i= 0; i < arr.length; i++){
//     if(arr[i]){
//         truthy.push(arr[i])
//     } else {
//         falsey.push(arr[i])
//     }
// }

// console.log(truthy,falsey   )
// 
// function getEvenMax(arr) {
//     let toq = null;
//     for (let i = 1; i < arr.length; i += 2) {
//         toq = toq === null ? arr[i] : Math.max(toq, arr[i]);
//     }
//     return toq;
// }


// console.log(getEvenMax([1, 7, 3, 9, 5, 2]));

function getEvenMax(arr) {
    let juft = 0;
    for (let i = 1; i < arr.length; i ++) {
        juft = juft === 0 ? arr[i] : Math.min(juft, arr[i]);
    }
    return juft;
}


console.log(getEvenMax([12, 42, 10, 4, 8, 2]));




   















    
    
    

