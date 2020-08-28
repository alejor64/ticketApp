const socket = io()
const label = $('#lblNuevoTicket')

socket.on('connect', () => {
    console.log('Conectado')
})

socket.on('disconnect', () => {
    console.log('Desconectado')
})

socket.on('estadoActual', (resp) => {
    label.text(resp.actual)
})

$('button').on('click', () => {
    socket.emit('siguienteTicket', null, (siguienteTicket) => {
        label.text(siguienteTicket)
    })
})