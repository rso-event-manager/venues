const Venue = require('../../models/venue')

module.exports = {
	venue: (args) => {
		return Venue.findOne({_id: args.id})
			.then(venue => {
				return venue
			})
			.catch(err => {
				throw err
			});
	},
	venues: () => {
		return Venue.find()
			.then(venues => {
				return venues.map(event => {
					return {...event._doc};
				});
			})
			.catch(err => {
				throw err;
			});
	},
	createVenue: (args) => {
		const venue = new Venue({
			name: args.venueInput.name,
			capacity: +args.venueInput.capacity,
			description: args.venueInput.description,
		});
		return venue
			.save()
			.then(result => {
				return {...result._doc};
			})
			.catch(err => {
				console.log(err);
				throw err;
			});
	},
	updateVenue: (args) => {
		return Venue.findOneAndUpdate({_id: args.venueUpdateInput._id}, {...args.venueUpdateInput}, {new: true})
			.then(res => {
				return res
			})
			.catch(err => {
				throw err
			})
	},
	deleteVenue: (args) => {
		return Venue.deleteOne({ _id: args._id })
			.then(res => {
				if (res.deletedCount > 0) {
					return 'Venue has been successfully deleted.'
				} else {
					return `Venue with id ${args._id} has not been deleted.`
				}
			})
			.catch(err => {
				throw err
			})
	},
};