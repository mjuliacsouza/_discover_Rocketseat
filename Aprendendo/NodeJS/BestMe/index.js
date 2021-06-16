// tipo de console.log()
//process.stdout.write("Alguma coisa")

const questions = [
    "O que aprendi hoje?",
    "O que me deixou aborrecido? E o que eu poderia fazer para melhorar?",
    "O que me deixou feliz hoje?",
    "Quantas pessoas ajudei hoje?",
]

const ask = ( index = 0 ) => {
    process.stdout.write("\n\n" + questions[index] + " > ")
}

ask()

const answers = []
process.stdin.on("data", data => {
    answers.push(data.toString().trim())
    if (answers.length < questions.length) {
        index = answers.length
        ask(index)
    } else {
        //console.log(answers)
        process.exit()
    }
})

process.on('exit', () => {
    console.log(`
        Legal Maju!

        O que vc aprender hoje foi:
        ${answers[0]}

        O que te aborreceu e vc poderia melhorar foi:
        ${answers[1]}

        O que te deivou feliz hoje:
        ${answers[2]}

        Você ajudou ${answers[3]} pessoas hoje!

        Volte amanhã para novas reflexões!
    `)
})