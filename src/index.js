const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const mongoose = require('mongoose');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', route);

mongoose.connect("mongodb+srv://soumya0985:ZtoqUK1lBKP7jUtw@cluster0.lwz2n.mongodb.net/soumya-db1?authSource=admin&replicaSet=atlas-12u83k-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true",{
useNewUrlParser: true
})
.then(() => console.log('Successfully connected to mongoDB 27017'))
.catch(err => console.log('Connection error'))

app.listen(process.env.PORT || 3000, function() {
    console.log('Express app running on port ' + (process.env.PORT || 3000));
});