const Ticket = require("./ticket");


class TickeList {

    constructor(){
        this.ultimoNumero = 0;


        this.pendientes = [];
        this.asignados = [];
    }

    get siguienteNumero () {
        this.ultimoNumero++;
        return this.ultimoNumero;
    }

    get ultimos13 () {
        return this.asignados.slice(0,13);
    }

    crearTicket () {
        const nuevoTicket = new Ticket(this.siguienteNumero);
        this.pendientes.push(nuevoTicket);//Los pongo al final
        return nuevoTicket;
    }

    asignarTicket (agente, escritorio){
        if(this.pendientes.length === 0){
            return null;
        }

        const siguienteTicket = this.pendientes.shift();//retorno el primero y lo elimino

        siguienteTicket.agent = agente;
        siguienteTicket.escritorio =escritorio;

        this.asignados.unshift(siguienteTicket); //lo pongo al principio
        return siguienteTicket;
    }
}

module.exports =TickeList;