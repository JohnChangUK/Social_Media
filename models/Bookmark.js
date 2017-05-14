var mongoose = require('mongoose');

var BookmarkSchema = new mongoose.Schema({
    profile: {type: String, default:Date.now}, // ID of profile who posted the Bookmark
    url: {type: String, trim: true, default:Date.now},
    title: {type: String, trim: true, default:Date.now},
    description: {type: String, trim: true, default:Date.now},
    image: {type: String, trim: true, default:Date.now},
    timestamp: {type: Date, trim: true, default:Date.now}
});

module.exports = mongoose.model('BookmarkSchema', BookmarkSchema);