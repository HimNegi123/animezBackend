const log=console.log;
const bodyParser = require('body-parser')
const express=require("express");
const app=express();
const process=require("process");
const port=process.env.port || 3000;
const userRoute=require("./routes/userEntryRoute");
const animeRoute=require("./routes/watchAnime");
const {connectToDatabase}=require("./dbConnection/connection");

//Connection to DataBase
connectToDatabase();

//Middlewares

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Routes
app.use('/user',userRoute);
app.use('/', animeRoute);


//  Port listening
app.listen(port,()=>{
log(`Server is now running in ${port}`);
});