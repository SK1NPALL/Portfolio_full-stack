require('dotenv').config()
const express = require('express')
const cors = require('cors')
const mysql = require('mysql2/promise')
const app = express()
const port = Number(process.env.PORT)

app.use(express.json())
app.use(cors())

let conn = null;

const initMySQL = async () => {

    conn = await mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE_1

    })

}

app.get('/aboutme' , async (req ,res) =>{

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

app.put('/aboutme/put' , async (req , res) => {

    try  {

        let newInfo = req.body

        const result = await conn.query('UPDATE aboutme SET img = ? ,info = ?',[newInfo.img , newInfo.info])

        res.json({

            message : 'Update complete!',
            result : result[0]

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