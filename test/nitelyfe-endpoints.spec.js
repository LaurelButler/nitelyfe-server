'use strict';
/* global supertest */
/* global expect */

const knex = require('knex');
const { expect } = require('chai');
const app = require('../src/app');

describe('Nitelyfe Endpoints', function(){
    let db;
    const eventTestResults = [
        {
            id: 1,
            title: 'party hard',
            description: 'bring your own bottle',
            location: 'piedmont park',
        },
        {
            id: 2,
            title: 'twisted thursdays',
            description: 'swirled margaritas',
            location: 'zocalo',
        },
        {
            id: 3,
            title: 'tacos',
            description: '2 dollar tacos',
            location: 'superica',
        },
        {
            id: 4,
            title: 'whiskey wednesday',
            description: 'all the whiskey you can drink',
            location: 'decatur, ga',
        },
        {
            id: 5,
            title: 'premium saturdays',
            description: '5 dollar premium alcohol shots',
            location: 'the local',
        },
    ]

    before('make knex instance', () => {
        db = knex({
            client: 'pg',
            connection: process.env.TEST_DB_URL,
        });
        app.set('db', db);
    });

    after('disconnect from db', () => db.destroy())

    before(() => db('nitelyfe_things').truncate())

    context('Given there are events in the database', () => {
        before('insert results', () => {
            return db
                .into('nitelyfe_things')
                .insert(eventTestResults)
        });

        it(`GET /api/events responds with 200 and all of the events`, () => {
            return supertest(app)
                .get('/api/events')
                .expect(200)
                .then(res => {expect(res.body).to.be.an('array')});
        });
    });
});