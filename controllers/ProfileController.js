var Profile = require('../models/Profile');
var Promise = require('bluebird');

module.exports = {

    find: function(params) {

        return new Promise( function(resolve, reject) {
    // Running Mongoose query 'find', for Profile Fetch
            Profile.find(params, function(err, profiles) {
                if (err) {
                    reject(err);
                    return;
                }

                resolve(profiles);
            });
        });
    },

    findById: function(id) {
        return new Promise(function(resolve, reject) {
            Profile.findById(id, function(err, profile) {
                if (err) {
                    reject(err);
                    return;
                }

                resolve(profile);
            });
        });
    },

    create: function(params) {
        return new Promise(function(resolve, reject) {
    // create is a Mongoose function, Profile is the Model
            Profile.create(params, function(err, profile) {
                if (err){
                    reject(err);
                    return;
                }

                resolve(profile);
            });
        });
    }
};