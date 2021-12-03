const TickeList = require("./ticket-list");


class Sockets {

    constructor(io){
        this.io=io;
        this.ticketList =  new TickeList();
        this.socketEvents();
    }
    

    socketEvents(){
        this.io.on('connection',(socket)=>{

            console.log('Cliente conectado');
            socket.on('mensaje-to-server',(data)=>{
                console.log(data);

                this.io.emit('mensaje-from-server',data);
            })

            socket.on('solicitar-ticket',(data,callBack)=>{
                const newTicket =  this.ticketList.crearTicket();
                callBack(newTicket);
            })
        })
    }
}

module.exports = Sockets;