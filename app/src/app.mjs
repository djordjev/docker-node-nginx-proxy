import express from 'express';
import { getSomeText } from './random/random.mjs';

const app = express();

app.use('/', (req, res) => {
    const someText = getSomeText();
    const txt = `Hello world, ${someText}`;
    console.log('request received');
    res.send(txt);
});

app.listen(3000, () => console.log('listening on local port 3000'));