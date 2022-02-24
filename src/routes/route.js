const express = require('express');
const router = express.Router();

let players = [];

router.post('/players', function(req, res) {

    let player = req.body;
    let playerName = player.name
    for(let i = 0; i < players.length; i++){
        if(players[i].name == playerName){
            res.send('player already exist')
        }
    }
    players.push(player);
    console.log('here is the playter array',players);
    res.send(players);
});

router.post('/players/:playerName/bookings/:bookingId', function(req, res){
    let name = req.params.playerName
    let isPlayerPresent = false

    for(let i = 0; i < players.length; i++) {
        if(players[i].name == name) {
        isPlayerPresent = true
        }
    }

    if(! isPlayerPresent){
        return res.send('player not present')
    }

    let booking = req.body
    let bookindId = req.params.bookingId
    for(let i = 0; i < players.length; i++){
        if(players[i].name == name) {
            let isBookingPresent = false
            for(let j = 0; j < players[i].bookings.length; j++){
                if(players[i].bookings[j]){
                    players[i].bookings.push(booking)
                }
            }
            
        }
    }

    res.send(players)

})

module.exports = router