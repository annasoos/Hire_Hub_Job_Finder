import express from "express";
import path from 'path';
import cors from 'cors';
import dotenv from "dotenv";
const server = express();

dotenv.config();

server.use(express.json());
server.use(cors({ origin: 'http://localhost:3000' }));

// STATIC

server.use(express.static(path.join(__dirname, '../frontend/build/')));

// INDEX ENDPOINT

server.get("/", (req, res) => {
	res.sendFile(path.join(__dirname, "../frontend/build/index.html"));
});


// GET JSON

server.get('/api/find-a-job', (req, res) => {
	res.sendFile(path.join(__dirname, '../src/assets', 'jobs.json'));
});

// LISTENING

const port = process.env.SERVER_PORT;

server.listen( port, () => {
    console.log( `server started at http://localhost:${ port }` );
} );