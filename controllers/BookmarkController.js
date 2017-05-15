var Bookmark = require('../models/Bookmark');
var Promise = require('bluebird');

module.exports = {

    find: function(params) {

        return new Promise( function(resolve, reject) {
    // Running Mongoose query 'find', for Profile Fetch
            Bookmark.find(params, function(err, bookmarks) {
                if (err) {
                    reject(err);
                    return;
                }

                resolve(bookmarks);
            });
        });
    }
};