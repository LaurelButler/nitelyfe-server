'use strict';

const express = require('express');
const eventsRouter = express.Router();
const bodyParser = express.json();

eventsRouter
    .route('/api/events')
    .get((req, res, next) => {
        const knexInstance = req.app.get('db');
        eventsService.getAllEvents(knexInstance, req.query)
            .then(events => {
                res.json(events);
            })
            .catch(next);
    });

    module.exports = eventsRouter;

    // .post(bodyParser, (req, res, next) => {
    //     const { id, note_name, modified, folder_id, content } = req.body;
    //     const newNote = { id, note_name, modified, folder_id, content };

    //     for (const [key, value] of Object.entries(newNote)) {

    //         if ((key === 'note_name' || key === 'folder_id') && (value === null || value === undefined)) {
    //             return res.status(400).json({
    //                 error: { message: `Missing '${key}' in request body` }
    //             });
    //         }

    //     }

    //     notefulService.insertNote(
    //         req.app.get('db'),
    //         newNote
    //     )
    //         .then(note => {
    //             res
    //                 .status(201)
    //                 .location(req.originalUrl + `/${note.id}`)
    //                 .json(note);
    //         })
    //         .catch(next);

    // });

    