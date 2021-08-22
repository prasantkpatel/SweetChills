const emotion_engine = require('../services/emotion_engine');

const controller = {
    get: get,
    post: post
}

function get(req, res) {
}

function post(req, res) {
    let body = req.body;

    if(body.input_type == "FRAME") {
        let frames = new Array(data.length);

        for(let frame in data.input) {
            let frame_no = frame["number"];
            let frame_pixels = frame["pixels"];

            frames[frame_no] = frame_pixels;
        }

        const engine_response = emotion_engine.get_using_frames(frames);
        const response = {
            input_type: "FRAME",
            status: engine_response.status,
            data: engine_response.data
        };

        res.json(response);
    }
}

module.exports = controller;
