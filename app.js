import express from 'express';
import config from 'config';
import bodyParser from 'body-parser';


const app = express();
const port = config.get('server.port');

app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.sendFile('index.html');
});

app.listen(port, ()=>{
   console.log(`Express server was started successfully on port ${port}`);
});