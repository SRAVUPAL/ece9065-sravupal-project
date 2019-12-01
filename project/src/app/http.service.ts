import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient ) { }
  getHpotter() {
    return this.http.get('http://localhost:3000/api/items/')
  }
  postHpotter(Hrequest) {
    return this.http.post('http://localhost:3000/api/items/', Hrequest)
  }
}


// const http = require('http');
// const app = require('./app');

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/items');

const Item = require('./items');

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

router.route('/items').post(function (req, res, next) {
    var item = new Item();
    item.name = req.body.name;
    item.description = req.body.description;
    item.due = req.body.due;
    item.quantity = req.body.quantity;

    item.save(function (err) {
        if (err) { res.send(err); }

        res.json({ message: 'Item included' });
    })
})
    .get(function (req, res, next) {
        Item.find(function (err, items) {
            if (err)
                res.send(err);

            res.json(items);
        });
    });
router.route('/items').delete(function (req, res, next) {
    Item.remove({}, function (err, item) {
        if (err)
            // return callback(err);
        res.json({ message: 'Removed items from list' });
    });
});

router.route('/items/:item_id').get(function (req, res, next) {
    Item.findById(req.params.item_id, function (err, item) {
        if (err)
            res.send(err);
        res.json(item);
    });
})

router.route('/items/:item_id').put(function (req, res, next) {
    Item.findById(req.params.item_id, function (err, item) {
        if (err)
            res.send(err);
        item.due = req.body.due;
        item.save(function (err) {
            if (err)
                res.send(err);
            res.json({ message: 'Item edited' });
        });
    });
})

router.route('/items/:item_id').delete(function (req, res, next) {
    Item.remove({
        _id: req.params.item_id
    }, function (err, item) {
        if (err)
            res.send(err);

        res.json({ message: 'item removed' });
    });
});

router.route('/items/quantity/:item_id').put(function (req, res, next) {
    Item.findById(req.params.item_id, function (err, item) {
        if (err)
            res.send(err);
        item.quantity = req.body.quantity;
        item.save(function (err) {
            if (err)
                res.send(err);
            res.json({ message: 'Item updated!' });
        });
    });
});

router.get('/', function (req, res) {
    res.json({ message: "lab3" });
});

app.use('/api', router);

app.listen(port, () => console.log(`listening on port ${port}....`));