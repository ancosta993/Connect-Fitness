const express = require('express') // import express server
const db = require('./config/connection'); // get the database connection
const {ApolloServer} = require('apollo-server-express');
// this is the server used for GraphQL
const {typeDefs, resolvers} = require('./schemas');

const PORT = process.env.PORT || 3000; // define the PORT for the server

//set up the apollo server
const server = new ApolloServer({
  typeDefs,
  resolvers
})


const app = express(); // a new instance of express

// express middlewears for processing client request and server response
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// create a wild route for the app
app.get('*', (req, res) => {
  res.send("This route does not exists!")
})

// Create a new instace of graphQL server
const startApolloServer = async(typeDefs, resolvers) => {
  await server.start();
  server.applyMiddleware({ app });

  db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on PORT ${PORT}`)
    });
  });
};

startApolloServer(typeDefs, resolvers);