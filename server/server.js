import express from 'express';
import { handler } from '../blink-and-play/build/handler.js';


const app = express();
const PORT = 3000;

// Demo route
app.get('/expressroute', (req, res) => {
    res.send("this is an express route!");
});


// This will connect your svelte kit app to your express server
app.use(handler);


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});