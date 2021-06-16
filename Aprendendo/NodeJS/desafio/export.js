function getFlags(string) {
    
    // a flag é algo que mostra um valor específico que vem depois
    // aqui a gente está obtendo o index do que a flag está direcionando

    const index = process.argv.indexOf(string) + 1
    return process.argv[index]
}

module.exports = getFlags;
