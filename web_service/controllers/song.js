const [get_emotion] = require('../services/emotion');
const [fetch_songs] = require('../services/song');

const controller = {
    get: get,
    post: post
};

function get(req, res) {
}

function post(req, res) {
    const response = {
        "emotion": "",
        "songs": []
    };

    let data = req.body;
    let emotion = get_emotion(data);
    let recommended_songs = fetch_songs(emotion);
    
    res.json(response);
}

module.exports = controller;
