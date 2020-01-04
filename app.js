const express = require('express')
const bodyParser = require('body-parser')
const graphqlHttp = require('express-graphql')
const mongoose = require('mongoose')

const graphqlSchema = require('./graphql/schema')
const graphqlResolvers = require('./graphql/resolvers')

const app = express()
const port = 3000

app.use(bodyParser.json())

app.use('/graphql', graphqlHttp({
	schema: graphqlSchema,
	rootValue: graphqlResolvers,
	graphiql: false,
}))

mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true, useUnifiedTopology: true})
const db = mongoose.connection

db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to db'))

app.listen(port, () => console.log(`Server started`))
