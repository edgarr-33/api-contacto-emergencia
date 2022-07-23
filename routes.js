const express = require('express')
const routes = express.Router()

routes.get('/', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)

        conn.query('SELECT * FROM contactos_emergencia', (err, rows)=>{
            if(err) return res.send(err)

            res.json(rows)
        })
    })
})

routes.post('/', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('INSERT INTO contactos_emergencia set ?', [req.body], (err, rows)=>{
            if(err) return res.send(err)

            res.send('contacto added!')
        })
    })
})

//get by id


routes.get('/:id_paciente', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)

        conn.query('SELECT * FROM contactos_emergencia WHERE id_paciente = ?',(req.body,req.params.id_paciente), (err, rows)=>{
            if(err) return res.send(err)

            res.json(rows)
        })
    })
})


routes.put('/:id_paciente', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('UPDATE contactos_emergencia set ? WHERE id_paciente = ?', [req.body, req.params.id_paciente], (err, rows)=>{
            if(err) return res.send(err)

            res.send('book updated!')
        })
    })
})


module.exports = routes