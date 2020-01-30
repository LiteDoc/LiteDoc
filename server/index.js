const express = require("express");
const http = require("http");
const path = require("path");
const socketIo = require("socket.io");

const port = process.env.PORT || 4000;
const routes = require("./routes/index");

const app = express();

app.use(express.static(path.join(__dirname, "../client/build")));
app.use(routes);
const server = http.createServer(app);
const io = socketIo(server);

io.on("connection", socket => {
  const name = socket.handshake.query.name;
  console.log(`Client Joined: ${name}`);

  socket.on("clientUpdateRegisters", () => {
    io.sockets.emit("serverUpdateRegisters");
  });

  socket.on("disconnect", () => {
    console.log(`Client Disconnected: ${socket.id}`);
  });
});

server.listen(port, () => console.log(`Listening on port ${port}`));
