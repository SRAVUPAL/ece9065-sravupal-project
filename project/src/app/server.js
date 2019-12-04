
// const http = require('http');
// const app = require('./app');

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/songs');

const song = require('./schema/songs');

const express = require('express');
const app = express();
// const morgan = require('morgan');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;

// app.use(morgan('dev'));cd

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', '*');
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }
    next();
});

app.use('/', express.static('./'));

const router = express.Router();

router.use(function (req, res, next) {
    console.log('code running');
    next();
});

router.route('/songs').get(function (req, res, next) {
    song.find(function (err, songs) {
        if (err)
            res.send(err);

        res.json(songs);
    });
});
router.route('/songs').post(function (req, res, next) {
    var song = new song();
    song.name = req.body.name;
    song.description = req.body.description;
    song.due = req.body.due;
    song.quantity = req.body.quantity;

    song.save(function (err) {
        if (err) { res.send(err); }

        res.json({ message: 'song included' });
    })
});
router.route('/songs').delete(function (req, res, next) {
    song.remove({}, function (err, song) {
        if (err)
            return callback(err);
        res.json({ message: 'Removed songs from list' });
    });
});

router.route('/songs/:song_id').get(function (req, res, next) {
    song.findById(req.params.song_id, function (err, song) {
        if (err)
            res.send(err);
        res.json(song);
    });
})

router.route('/songs/:song_id').put(function (req, res, next) {
    song.findById(req.params.song_id, function (err, song) {
        if (err)
            res.send(err);
        song.due = req.body.due;
        song.save(function (err) {
            if (err)
                res.send(err);
            res.json({ message: 'song edited' });
        });
    });
})

router.route('/songs/:song_id').delete(function (req, res, next) {
    song.remove({
        _id: req.params.song_id
    }, function (err, song) {
        if (err)
            res.send(err);

        res.json({ message: 'song removed' });
    });
});

router.route('/songs/quantity/:song_id').put(function (req, res, next) {
    song.findById(req.params.song_id, function (err, song) {
        if (err)
            res.send(err);
        song.quantity = req.body.quantity;
        song.save(function (err) {
            if (err)
                res.send(err);
            res.json({ message: 'song updated!' });
        });
    });
});

router.get('/', function (req, res) {
    res.json({ message: "project" });
});

app.use('/api', router);

app.listen(port, () => console.log(`listening on port ${port}....`));
