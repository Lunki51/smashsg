const fastify = require('fastify')
const fs = require('fs');
const path = require('path')
const app = fastify();

app.register(require('@fastify/static'), {
    root: path.join(__dirname, 'public')
})


app.get("/",async(req,reply)=>{
    reply.sendFile('./index.html');
})

app.get("/poc'han",async(req,reply)=>{
    reply.send("Donnez de l'argent a poc'han svp")
})



app.listen(4015,"0.0.0.0")