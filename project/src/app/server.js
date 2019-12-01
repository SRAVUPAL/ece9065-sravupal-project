
// const http = require('http');
// const app = require('./app');

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/revies');

const review = require('./schema/reviews');

const express = require('express');
const app = express();
// const morgan = require('morgan');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;

// app.use(morgan('dev'));

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

router.route('/reviews').post(function (req, res, next) {
    var review = new review();
    review.name = req.body.name;
    review.description = req.body.description;
    review.due = req.body.due;
    review.quantity = req.body.quantity;

    review.save(function (err) {
        if (err) { res.send(err); }

        res.json({ message: 'review included' });
    })
})
    .get(function (req, res, next) {
        review.find(function (err, reviews) {
            if (err)
                res.send(err);

            res.json(reviews);
        });
    });
router.route('/reviews').delete(function (req, res, next) {
    review.remove({}, function (err, review) {
        if (err)
            return callback(err);
        res.json({ message: 'Removed reviews from list' });
    });
});

router.route('/reviews/:review_id').get(function (req, res, next) {
    review.findById(req.params.review_id, function (err, review) {
        if (err)
            res.send(err);
        res.json(review);
    });
})

router.route('/reviews/:review_id').put(function (req, res, next) {
    review.findById(req.params.review_id, function (err, review) {
        if (err)
            res.send(err);
        review.due = req.body.due;
        review.save(function (err) {
            if (err)
                res.send(err);
            res.json({ message: 'review edited' });
        });
    });
})

router.route('/reviews/:review_id').delete(function (req, res, next) {
    review.remove({
        _id: req.params.review_id
    }, function (err, review) {
        if (err)
            res.send(err);

        res.json({ message: 'review removed' });
    });
});

router.route('/reviews/quantity/:review_id').put(function (req, res, next) {
    review.findById(req.params.review_id, function (err, review) {
        if (err)
            res.send(err);
        review.quantity = req.body.quantity;
        review.save(function (err) {
            if (err)
                res.send(err);
            res.json({ message: 'review updated!' });
        });
    });
});

router.get('/', function (req, res) {
    res.json({ message: "project" });
});

app.use('/api', router);

app.listen(port, () => console.log(`listening on port ${port}....`));