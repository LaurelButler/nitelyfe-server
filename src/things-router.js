'use strict';

const express = require('express');
const eventsRouter = express.Router();
const bodyParser = express.json();
const NitelyfeService = require('./things-service');

eventsRouter
    .route('/api/events')
    .get((req, res, next) => {
        const knexInstance = req.app.get('db');
        //eventsService.getAllEvents(knexInstance, req.query)
        knexInstance.select('*').from('nitelyfe_things')
            .then(events => {
                res.json(events);
            })
            .catch(next);
    })


    .post(bodyParser, (req, res, next) => {
        const { description, location, day_of_week, title } = req.body;
        const newEvent = { description, location, day_of_week, title };

        NitelyfeService.insertEvent(
            req.app.get('db'),
            newEvent
        )
            .then(event => {
                res
                    .status(201)
                    .location(req.originalUrl + `/${event.id}`)
                    .json(event);
            })
            .catch(next);

    })
    
    eventsRouter
    .route('/api/events/:id')
    .delete((req, res, next) => {
        const knexInstance = req.app.get('db');
        NitelyfeService.deleteEvent(knexInstance, req.params.id) 
            .then(rowsAffected => {
                console.log(rowsAffected);
                res.status(204).end()
            }
            )
            .catch(next);
    });

module.exports = eventsRouter;

    