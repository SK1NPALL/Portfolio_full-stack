require('dotenv').config()
const express = require('express')
const cors = require('cors')
const mysql = require('mysql2/promise')
const app = express()
const port = Number(process.env.PORT)

const multer = require('multer')
app.use('/uploads', express.static('uploads'))

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/')
  },
  filename: function (req, file, cb) {
    
    cb(null, file.originalname)
  }
})

const upload = multer({ storage: storage })

// test 

app.post('/multer-test', upload.single('uploaded_file'), async (req, res) => {

    try {

        res.status(204).end() 
        console.log("Update complete!")

    } catch (error) {

        console.log(error.message)

    }

})

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

app.get('/aboutme', async (req, res) => {

    try {

        const result = await conn.query('SELECT * FROM aboutme')


        res.json({

            message: 'Get info complete',
            info: result[0]

        })

    } catch (error) {

        console.log(error.message)
        res.status(500).json({

            message: 'Something went wrong.'

        })

    }

})

app.put('/aboutme/put', async (req, res) => {

    try {

        let bodyInfo = req.body
        let newInfo = ''

        if(bodyInfo.img && bodyInfo.info) {

            newInfo = {
                img : bodyInfo.img ,
                info : bodyInfo.info
            }            

        } else if(bodyInfo.info) {

            newInfo = {info : bodyInfo.info}

        }else {

            newInfo = {img : bodyInfo.img}

        }

        const result = await conn.query('UPDATE aboutme SET ?', [newInfo])

        res.json({

            message: 'Update complete!',
            result: result[0]

        })
    } catch (error) {
        console.log(error.message)
        res.status(500).json({

            message: 'Something went wrong.'

        })

    }

})

app.listen(port, (req, res) => {

    initMySQL()
    console.log('Server start at ' + port)

})