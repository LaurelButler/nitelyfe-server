'use strict';

const NitelyfeService = {
   
        getAllEvents(db) {
            return (
                db.select('*').from('nitelyfe_things')
            );
        },

        getEventsById(db, id) {
            return (
                db.select('*').from('nitelyfe_things').where('id', id).first()
            );
        },


        insertEvent(db, newEvent) {
            return db.insert(newEvent).into('nitelyfe_things')
                .returning('*')
                .then(rows => {
                    return rows[0];
                });

        },

        deleteEvent(db, id) {
            return (
                db.select('*').from('nitelyfe_things').where('id', id).delete()
            );
        },

        updateEvent(db, id, updates) {
            return (
                db('nitelyfe_things')
                    .where({ id })
                    .update(updates)
            );
        }


};


module.exports = NitelyfeService