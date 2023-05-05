import express from "express";

const server = express();

// Middleware
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

export default server;
