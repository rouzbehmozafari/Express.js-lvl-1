const express = require('express')
const fs = require('fs')

const app = express()

// function pageReader(addr,res){
//     fs.readFile(addr,(err,data)=>{
//         if (err) {
//             res.writeHead(500)
//             res.end()
//         }
//         else{
//             res.sendFile(__dirname + "/public/notFound.html")
//         }
//     }) 
    

// }
app.use((req,_ , next)=>{
    console.log(req.url)
    next()
})
app.get('/',(_,res)=>{
        res.sendFile(__dirname + "/public/pages/home.html")
})
app.get('/why',(_,res)=>{
        res.sendFile(__dirname + "/public/pages/why.html")
})
app.get('/images/pinkVector.png',(_,res)=>{
        res.sendFile(__dirname + "/public/images/pinkVector.png")
})
app.get('/styles/style.css',(_,res)=>{
        res.sendFile(__dirname + "/public/styles/style.css")
})
app.use((_,res)=>{
    res.sendFile(__dirname + '/public/pages/error.html')
})



const port = 8080
app.listen(port,()=>{console.log('listening on ',port)})