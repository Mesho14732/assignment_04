//importing modules and declaration of variables
const express = require (`express`);
const authorRoute = require(`./author.route`);
const logger = require (`./logger`);
const PORT = 4000;
const HOSTNAME = `localhost`;

const app = express();


//Middleware
app.use(express.json());
app.use(logger);
app.use(express.static(`public`));
app.use(`/authors`, authorRoute);

app.get(`./authors`, (req, res)=>{
    res.end(`Hello from authors router`);
});

app.post(`./authors`, (req, res)=>{
    res.end(`Create book authors`);
});

app.put(`./authors`, (req, res)=>{
    res.end(`update book authors`);
});

app.delete(`./authors`, (req, res)=>{
    res.end(`delete book authors`);
});

//listening to app on the declared port
app.listen(PORT, HOSTNAME, ()=>{
    console.log(`server is running on http://${HOSTNAME}:${PORT}`);
});