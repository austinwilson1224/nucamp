const express = require('express');
const Campsite = require('../models/campsite');
const Promotion = require('../models/Promotion');
const promotionRouter = express.Router();

promotionRouter.route('/')
// .all((req,res,next) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type','text/plain');
//     next();
// })
.get((req, res, next) => {
    // res.end('Will send all the promotions to you');
    Promotion.find()
    .then(promotions => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(promotions);
    })
    .catch(err => next(err));
})
.post((req, res, next) => {
    // res.end(`Will add the promotion: ${req.body.name} with description: ${req.body.description}`);
    Promotion.create(req.body)
    .then(promotion => {
        console.log('Promotion created ', promotion);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(promotion);
    })
    .catch(err => next(err));
})
.put((req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /promotions');
})
.delete((req, res, next) => {
    // res.end('Deleting all promotions');
    Campsite.deleteMany()
    .then(response => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(response);
    })
    .catch(err => next(err));
});

promotionRouter.route('/:promotionId')
// .all((req,res,next) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/plain');
//     next();
// })
.get((req,res, next) => {
    // res.end(`Will send details of the promotion: ${req.params.promotionId} to you`);
    Promotion.findById(req.params.promotionId)
    .then(promotion => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(promotion);
    })
    .catch(err => next(err));
})
.post((req, res) => {
    res.statusCode = 403;
    res.end(`POST operation not supported on /promotions/${req.params.promotionId}`);
})
.put((req, res, next) => {
    // res.write(`Updating the promotion: ${req.params.promotionId}\n`);
    // res.end(`Will update the promotion: ${req.body.name}with description: ${req.body.description}`);
    Promotion.findByIdAndUpdate(req.params.promotionId,{
        $set: req.body
    }, { new: true})
    .then(promotion => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(promotion);
    })
    .catch(err => next(err));
})
.delete((req, res, next) => {
    // res.end(`Deleting promotion ${req.params.promotionId}`);
    Promotion.findByIdAndDelete(req.params.promotionId)
    .then(response => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(response);
    })
    .catch(err => next(err));
})


module.exports = promotionRouter;