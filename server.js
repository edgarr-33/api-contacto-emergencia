const express = require('express')
const mysql = require('mysql')
const myconn = require('express-myconnection')

const routes = require('./routes')

const app = express()


app.set('port', process.env.PORT || 3000)
const dbOptions = {
    host: 'huella.ckqije37hkm6.us-east-1.rds.amazonaws.com',
    port: 3306,
    user: 'admin',
    password: 'palabra8',
    database: 'qr',
}

// middlewares -------------------------------------
app.use(myconn(mysql, dbOptions, 'single'))
app.use(express.json())

// // routes -------------------------------------------
app.get('/', (req, res)=>{
    res.send('Welcome to my API contacto de emergencias')
})
app.use('/api', routes)

// server running -----------------------------------
app.listen(app.get('port'), ()=>{
    console.log('server running on port', app.get('port'))
})