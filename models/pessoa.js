const PessoaModel = (seqConn, DateTypes) => {

    const Pessoa = seqConn.define('Pessoa', {
        nome: DateTypes.STRING,
        cargo: DateTypes.STRING,
        nascimento: DateTypes.DATE
    })

    Pessoa.associate = ({Usuario}) => {
        Pessoa.hasOne(Usuario)
    }

    return Pessoa

}

module.exports = PessoaModel