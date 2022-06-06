const express = require('express');
const bodyParser = require("body-parser");
const cors = require('cors');
const app = express();
const port = 3000;
const server = app.listen(port, listening);

// Middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static('website'))

// API Functions
function getData(_req, res) {
    res.send(projectData);
}

function postData(req, res) {
    projectData = {
        temperature: req.body.temperature,
        date: req.body.date,
        userResponse: req.body.userResponse
    }
    res.send(projectData);
}

// App Requests
app.get("/getData", getData);
app.post("/postData", postData);

// Listening Function
function listening() {
    console.log(`Server Listening on port ${port}`);
}