let kata = "abang"
let kata_2 = ""
let i = 0
for(i = 0; i < kata.length; i++){
	kata_2 += kata[(kata.length - 1) - i]
}
console.log(kata_2 == kata)