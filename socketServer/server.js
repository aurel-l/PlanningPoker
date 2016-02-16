const PORT = 3000;

const io = require('socket.io')(PORT);

io.on('connection', socket => {
  console.log('A user just connected');
});
