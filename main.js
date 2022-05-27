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



app.listen(3000)