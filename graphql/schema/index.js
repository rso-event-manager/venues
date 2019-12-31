const {buildSchema} = require('graphql')

module.exports = buildSchema(`
	type Venue {
		_id: ID!
		name: String!
		capacity: Int!
		description: String
	}
	
	input VenueInput {
		name: String!
		capacity: Int!
		description: String
	}
	
	input VenueUpdateInput {
		_id: ID!
		name: String
		capacity: Int
		description: String
	}
	
	type RootQuery {
		venues: [Venue!]!
		venueById(id: String): Venue
	}
	
	type RootMutation {
		createVenue(venueInput: VenueInput): Venue
		updateVenue(venueUpdateInput: VenueUpdateInput): Venue
		deleteVenue(_id: ID!): String
	}
	
	schema {
		query: RootQuery 
		mutation: RootMutation
	}
`);