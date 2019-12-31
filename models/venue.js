const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const venueSchema = new Schema({
	name: {
		type: String,
		required: true,
	},
	capacity:  {
		type: Number,
		required: true,
	},
	description:  {
		type: String,
		required: false,
	},
});

module.exports = mongoose.model('Venue', venueSchema);