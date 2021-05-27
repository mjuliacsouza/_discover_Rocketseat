//Declarando variáveis =========================
//Declarando uma variável com var
var clima = "Quente"
console.log(clima)

//Declarando variável com let
let vento = "Frio"
console.log(vento)

//Declarando variável com const
const temperatura = 25
console.log(temperatura)
//temperatura = 30
console.log(temperatura)
    // O que acontece é que o valor declarado const não pode ser alterado 

//Para testar o tipo da variável:
console.log(typeof temperatura)
console.log(typeof clima)

//Scope========================================
console.log('-----------scope------------')
//O tipo de variável var funciona fora de um escopo de bloco, é global e local:
{
    var x=0;     //lembrar do hoisting
    console.log(x)
}
console.log(x + ' oi')

//Já um let daria erro, é apenas local:
{
    let y=0;
    console.log(y)
}
//console.log(y + ' oi')
let a =1;
{
    a=2
    console.log(a)
}
console.log(a + " oi")

//Para const, também é local:
{
    const z=0;
    console.log(z)
}
//console.log(z + ' oi')


