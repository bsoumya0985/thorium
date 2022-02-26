const express = require('express');
const router = express.Router();
router.get('/test-me', function (req, res) {
    res.send('Welcome to my movies collections!');
});
// 1. THIS API WILL SHOW ALL MOVIES IN ARRAY
router.get('/MOVIES', function (req, res){
   res.send('["Yeh Jawani Hai Dewani","Zindagi Na milege dobara","Family Man","Money Heist","Mirzapur"]')
});
//2. THIS API WILLfetch all MOVIES by index id 
router.get('/MOVIES/:movieid', function (req, res){
mov = ["Yeh Jawani Hai Dewani","Zindagi Na milege dobara","Family Man","Money Heist","Mirzapur"]
let value = req.params.movieid;
if (value>mov.length-1){
    res.send('"doesnot exist"')
} else{
    res.send(mov[value])
}
})
// 3. this api will fetch all movies from array all objects
router.get('/MOVIEz', function (req, res){

    res.send([ {id: 1,name: 'Rockstar'}, {id: 2,name: 'Intersteller'},{id: 3,name: 'Chernobyl'},{id: 4,name:'DDLJ'},{id: 5,name: 'border'}]);
});
// 4. this api will fetch all movies from array of objects by Indexid
router.get('/films/:flimId', function (req, res){
let movi=[{id: 1,name: 'Rockstar'}, {id: 2,name: 'Intersteller'},{id: 3,name: 'Chernobyl'},{id: 4,name:'DDLJ'},{id: 5,name: 'border'}]
let value = req.params.flimId;
let found = false;
for (i=0;i< movi.length;i++){
if (movi[i].id == value){
    found = true
    res.send(movi[i])
    break
}
}
if (found==false){
    res.send('no movie exist with this id')}
});


module.exports = router;
