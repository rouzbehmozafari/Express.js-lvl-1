const express = require('express')
let {movies} = require('./public/dataBase/movies')
const app = express()

// const all = JSON.parse(movies)

// app.use((req,res,next)=>{
//     const all = res.json(movies)
//     next
// })

app.get('/',(_,res)=>{
    res.sendFile(__dirname+'/public/pages/home.html')
})
app.get('/movies/api',(_,res)=>{
    res.json(movies)
})

app.get('/movies/api/:id',(req,res)=>{
    let id = req.params.id
    res.json(movies[id])
})

// error 404
app.use((_,res)=>{
    res.sendFile(__dirname+'/public/pages/error.html')
})

port = 2020
app.listen(port,console.log('listening on ',port))