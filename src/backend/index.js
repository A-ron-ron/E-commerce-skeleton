import express from 'express';
import path from 'path';

const app = express();


app.use(express.static(path.join(__dirname, '../../dist/frontend/')));

app.get('/index.html', (req, res) => {
    const file = path.join(__dirname, '../../dist/frontend', 'index.html');
    res.sendFile(file);
});

app.listen(process.env.PORT);
console.log('APP LISTENING: ' + process.env.PORT);