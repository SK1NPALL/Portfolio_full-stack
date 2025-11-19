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

// ABOUT ME

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

        if (bodyInfo.img && bodyInfo.info) {

            newInfo = {
                img: bodyInfo.img,
                info: bodyInfo.info
            }

        } else if (bodyInfo.info) {

            newInfo = { info: bodyInfo.info }

        } else {

            newInfo = { img: bodyInfo.img }

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

// PROJECT


// GET project
app.get('/project/get', async (req, res) => {

    try {

        const result = await conn.query('SELECT * FROM project')
        res.json({

            message: "Get info complete!",
            info: result[0]

        })

    } catch (error) {

        console.log(error.message)
        res.status(500).json({

            message: "Something went wrong."

        })

    }

})


// POST project
app.post('/project/post', async (req, res) => {

    try {

        let info = req.body
        const result = await conn.query('INSERT INTO project SET ?', info)


        res.json({

            message: 'Insert complete!',
            info_insert : result[0]

        })

    } catch (error) {

        console.log(error.message)

        res.status(500).json({

            message: 'Something went wrong.'

        })

    }

})

// PUT

app.put('/project/put/:id', async(req, res) => {

    try{   
        
        let id = req.params.id
        let data = req.body

        const result = await conn.query('UPDATE project SET ? WHERE id = ?', [data,id])

        res.json({

            message : "Update complete!",
            id_update : id,
            result : result[0]

        })

    }catch(error) {

        console.log(error.message)
        res.status(500).json({

            message : 'Something went wrong.'

        })

    }

})

// DELETE project
app.delete('/project/delete', async (req, res) => {

    try {

        let number = req.body

        const result = await conn.query('DELETE FROM project WHERE id = ?', number.id)

        res.json({

            message: 'Delte complete!',
            id_deleted: number

        })

    } catch (error) {

        console.log(error.message)

        res.json({

            message: 'Something went wrong.'

        })


    }



})

app.listen(port, (req, res) => {

    initMySQL()
    console.log('Server start at ' + port)

})