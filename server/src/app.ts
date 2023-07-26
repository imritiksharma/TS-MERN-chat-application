// const express = require('express');
// const http = require('http');
import express, { Request, Response } from 'express';
import http from 'http';
import cors from 'cors';
import { Server } from 'socket.io';

const port: string = process.env.PORT || '8080';
const app = express();

app.use(cors());
app.use(express.json());

const server = http.createServer(app);
const io = new Server(server, {
	cors: {
		origin: true,
		methods: ['GET', 'POST'],
		credentials: true, 	
	}
});	

io.on('connection', (socket) => {
	console.log(`a user is connected: ${socket.id}`);
  });

app.get('/api', (req: Request, res: Response) => {
	res.status(200).json({
		message: "hello world"
	})
})

server.listen(port, () => {
	console.log(`Server is running and listening on port ${port}`);
})
