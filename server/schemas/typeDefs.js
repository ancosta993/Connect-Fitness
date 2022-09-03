const { gql } = require('apollo-server-express');

const typeDefs = gql `
   type User {
      _id: ID
      username: String
      email: String
      gender: String
      weight: Float
      age: Int
      level: String
      description: String
      diet: [Diet]
      routine: [Routine]
   }


   type Diet {
      _id: ID
      name: String
      mealTime: String
      calorie: Int
      username: String
      details: String 
   }

   type Routine {
      _id: ID
      title: String
      workoutText: String
      createdAt: String
      username: String
   }

   type Auth {
      token: ID!
      user: User
   }

   type Query{
      users: [User]
      user(username: String!): User
      me: User
      diets(username: String): [Diet]
      routines(username: String): [Routine]
   }

   type Mutation {
      addUser(
         username: String!, 
         email: String!, 
         password: String!,
         gender: String!,
         weight: Float,
         dateOfBirth: String!,
         level: String!,
         description: String!): Auth
      login(email: String!, password: String!): Auth
      addDiet(name: String!, mealTime: String!, calorie: Int, details: String!): Diet
      addRoutine(title: String!, workoutText: String!): Routine
   }
`;

module.exports =  typeDefs;