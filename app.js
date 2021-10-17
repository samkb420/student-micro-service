require("dotenv").config();
const express = require("express");
const cors = require('cors');
const loginRoutes = require("./routes/login-routes");
const app = express();



app.use(express.json());

app.use(cors());
app.use(express.urlencoded({extended: true}));


app.use('/api/v1',loginRoutes.routes);





 


module.exports = app;