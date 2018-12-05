const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const controllers = require('./controllers/messages_controller');

app.use(bodyParser.json());
app.use(express.static(__dirname +'/../public/build'));

const port = 3001;
app.listen(port,()=>{console.log(`Server listening on port ${port}`);});

const messagesBaseUrl = '/api/messages';
app.post(messagesBaseUrl, controllers.create);
app.get(messagesBaseUrl, controllers.read);
app.put(`${messagesBaseUrl}/:id`, controllers.update);
app.delete(`${messagesBaseUrl}/:id`, controllers.delete);

