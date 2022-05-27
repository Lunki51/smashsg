const fastify = require('fastify')
const fs = require('fs');
const app = fastify();



app.get("/",async(req,reply)=>{
    const stream = fs.createReadStream('./index.html')
    reply.type('text/html');
    reply.send(stream);
})



app.listen(3000)