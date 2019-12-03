const socket = io('localhost:3000');
socket.emit('new-user', prompt('enter user name'))
