const { gql } = require('apollo-server-express');

const typeDefs = gql `
   type User {
      _id: ID
      username: String!
      password: String!
      email: String!
      diet: [Diet]
   }

   type Diet {
      _id: ID
      name: String
      mealTime: String
      calorie: Int
      username: String
      Details: String
   }

   type Auth {
      token: ID!
      user: User
   }

   type Query{
      users: [User]
      user(username: String!): User
      me: User
      diet: Diet
   }

   type Mutation {
      addUser(username: String!, email:String!, password: String!): Auth
      login(email:String!, password: String!): Auth
   }
`;

module.exports =  typeDefs;