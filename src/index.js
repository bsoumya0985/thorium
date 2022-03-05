const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const middlewareWrapper = require('cors');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
        function(req, res, next){
            let currentDate = new Date();
            let newIP = req.socket.remoteAddress
            console.log(currentDate, newIP, req.originalUrl)
            next()
        }

)


mongoose.connect("mongodb+srv://soumya0985:ZtoqUK1lBKP7jUtw@cluster0.lwz2n.mongodb.net/soumya-db4?authSource=admin&replicaSet=atlas-12u83k-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )

app.use('/', route);

app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
