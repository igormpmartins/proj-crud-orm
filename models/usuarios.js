const UsuarioModel = (seqConn, DateTypes) => {
    const Usuario = seqConn.define('Usuario', {
        username: DateTypes.STRING,
        senha: DateTypes.STRING
    })
    return Usuario
}

module.exports = UsuarioModel