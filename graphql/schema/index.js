const {buildSchema} = require('graphql')

module.exports = buildSchema(`
	type VenueType {
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
		venues: [VenueType!]!
		venue(id: String): VenueType
	}
	
	type RootMutation {
		createVenue(venueInput: VenueInput): VenueType
		updateVenue(venueUpdateInput: VenueUpdateInput): VenueType
		deleteVenue(_id: ID!): String
	}
	
	schema {
		query: RootQuery 
		mutation: RootMutation
	}
`);