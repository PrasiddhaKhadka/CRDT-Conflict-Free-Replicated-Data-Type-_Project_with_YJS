import express from 'express'
import { Server } from 'socket.io'
import { createServer } from 'http';
import { YSocketIO} from "y-socket.io/dist/server";


const app = express()
const httpServer = createServer(app)


const io = new Server(httpServer,{
    cors:{
        origin:"*",
        methods:["GET","POST"]
    }
})


const ySocketIO = new YSocketIO(io)
ySocketIO.initialize()



app.get("/health",(req,res)=>{
    res.status(200).json({
        msg:'Success! Health Check',
        success:true
    })
})


httpServer.listen((8000),()=>{
 console.log('Server is running @8000')
})