let arr = [
		[11, 2, 4, 5],
		[4, -5, 6, 7],
		[10, 8, 12, 8],
		[1, 2, 3, 9],
	]
let a = 0
let b = 0
	
for(let i = 0; i<arr.length; i++){
    a += arr[i][i]
    b += arr[i][(arr.length-1)-i]
}
console.log("A: ", a)
console.log("B: ", b)
console.log("A + B: ", a + b)