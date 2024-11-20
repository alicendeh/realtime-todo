import express from "express";
import { app, server } from "./lib/socket.js";

app.use(express.json());

server.listen(5001, () => {
  console.log("Server up and runing on port 5001");
});
