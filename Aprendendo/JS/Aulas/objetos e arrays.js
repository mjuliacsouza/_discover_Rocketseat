// objetos

//Criação de objeto
const person={
    name: 'John',
    age: 30,
    weight: 88.6,
    isAdmin:true
}

//imrpimir um dos atributos
console.log(`${person.name} tem ${person.age} anos`)


//Array
const animals=[
    'Lion',
    'Monkey',
    'Cat',
    {
        nome: 'Dog',
        age: 3
    }
]

//acessar valores dentro de um array
console.log(animals[3].nome)