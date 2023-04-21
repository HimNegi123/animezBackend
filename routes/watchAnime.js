const express = require("express");
const route = express.Router();
const{search,anime,watch,home1,home2,home3,trailer}=require("../controllers/watchAnimeControllers");

//Search anime Route
route.get('/search',search);

// // Anime route
route.post('/anime',anime);

//video route
route.post('/watch',watch);

// route.get('/anime',anime);
route.get('/home1',home1);
route.get('/home2',home2);
route.get('/home3',home3);

// //Anime episode Route

route.get('/trailer',trailer);
// route.get('/episodes',episodes);
module.exports=route;
