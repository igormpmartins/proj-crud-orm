const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')

const rtPess = require('./routes/pessoas')
const models = require('./models/index')

const app = express()
const port = process.env.PORT || 3000

//já roda o sync
//const model = require('./models/index')

/* settings */
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
app.use(express.static(path.join(__dirname, 'public')))

/* routes */
app.use(bodyParser.urlencoded({extended: true}))
app.use('/pessoas', rtPess)
app.use('/contato', (req, res)=>{res.render('contato')})
app.use('/', (req, res)=>{res.render('index')})

/* server */
models.db.sync({force: true}).then( () => {
    console.log('Synced - starting server')

    app.listen(port, () => {
        console.log('app online!')
    })

})