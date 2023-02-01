//create mongo database
require('./api-backend/models/connect.js')
const question = require('./api-backend/routes/question.js')
const user = require('./api-backend/routes/user.js')
const admin = require('./api-backend/routes/admin.js')
const institution = require('./api-backend/routes/institution.js')
const answer = require('./api-backend/routes/answer.js')
const survey = require('./api-backend/routes/questionnaire.js')
const adminServer = require('./api-backend/routes/adminServer.js')

const bodyParser = require('body-parser')
const cors = require('cors')
const express = require('express');
const path = require('path');
const session = require('express-session');
const flash = require('connect-flash');
const router = express.Router();
require('custom-env').env('localhost');
const app= express();

//middleware
app.use(bodyParser.json());
app.use(cors())


//run post and get responses
app.use('/intelliq_api/user',user);
app.use('/intelliq_api/questionnaire',survey);
app.use('/intelliq_api/adminpage',admin);
app.use('/intelliq_api/institution',institution);
app.use('/intelliq_api/question',question);
app.use('/intelliq_api/answer',answer);
app.use('/intelliq_api/admin',adminServer);
app.get('/hello', (req, res) => {
    res.send('Hello');
});

module.exports = app;
