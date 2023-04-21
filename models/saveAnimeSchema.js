const mongoose=require("mongoose");

const Schema=new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    imgUrl:{
        type:String,
        require:true
    }
});

const saveAnime=mongoose.model("saveAnimeList",Schema);

module.exports=saveAnime;