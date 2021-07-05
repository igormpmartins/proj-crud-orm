const Sequelize = require('sequelize')
const fs = require('fs')
const path = require('path')

/* Conn */ 
const seqConn = new Sequelize('cadastro-orm', 'root', '', {
    dialect: 'mysql',
    hostname: '127.0.0.1'
} )

/* Models */
//const Pessoa = seqConn.import('./pessoa.js')

/* importando de forma dinâmica */
const models = {}
const lista = fs
                .readdirSync(__dirname)
                .filter(file => file !== 'index.js')
                .forEach(file => {
                    const model = seqConn.import(path.join(__dirname, file))
                    models[model.name] = model
                })

Object.keys(models).forEach(model => {
    if ('associate' in models[model]) {
        models[model].associate(models)
    }
})

/* Sync */

/*seqConn.sync().then( () => {
    console.log('synced!')
})*/

/*seqConn.authenticate().then( () => {
    console.log('foi!')
})*/

module.exports = {
    db: seqConn,
    models
}