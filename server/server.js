import express from 'express';
import { handler } from '../blink-and-play/build/handler.js';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;
app.use(express.static(path.join(__dirname, '../blink-and-play/')));

// Demo route
app.get('/expressroute', (req, res) => {
    res.send("this is an express route!");
});

// This will connect your svelte kit app to your express server
app.use(handler);


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});