const Player = require('../models/Player');


async function store(req, res) {
    try {
        const {user_id, nickname} = req.body;
        if (await Player.findOne({where: {user_id: user_id}}))
            return res.json({error: 'Usuario já possui um player'});
        const player = await Player.create( {user_id, nickname} );
        return res.json(player);
    }
    catch(err) {
        res.json({error: err.message});
    } 
}

async function ChangeNick(req, res) { 
    try {
        const {user_id, nickname, new_nickname}  = req.body;
        let player = Player.findOne({where: {user_id: user_id, nickname: nickname}});
        if (!player) 
            return res.json({error: 'Player não encontrado!'});
        
        (await player).update({nickname: new_nickname});
        
        return res.json({player});

    } catch(err) {
        return res.json({error: err.message});
    }
}

module.exports = {
    store,
    ChangeNick,
};