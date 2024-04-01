var num = [5, 8, 2, 3]
num.push(9)
num.sort()
console.log(num)
console.log(`Nosso vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)

var pos = num.indexOf(8)
console.log(`O valor 8 está na posição ${pos}`)

//Código mais completo
for(var pos=0; pos<num.length; pos++){
    console.log(`A posição ${pos} tem o número ${num[pos]}`)
}

//Código simplificado(Preferancia)
for(var pos in num){
    console.log(`A posição ${pos} tem o número ${num[pos]}`)
}

