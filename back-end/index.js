require('dotenv').config()
const express = require('express')
const mysql = require('mysql2/promise')
const app = express()
const port = Number(process.env.PORT)

app.use(express.json())

let conn = null;

const initMySQL = async () => {

    conn = await mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE_1

    })

}

app.get('/info' , async (req ,res) =>{

    try{

        const result = await conn.query('SELECT * FROM aboutme')


        res.json({

            message : 'Get info complete',
            info : result[0]

        })

    }catch(error) {

        console.log(error.message)
        res.status(500).json({
            
            message : 'Something went wrong.'

        })

    }

})

app.listen(port, (req, res) => {

    initMySQL()
    console.log('Server start at ' + port)

})