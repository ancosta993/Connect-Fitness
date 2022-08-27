const { User }  = require('../models');
const {AuthenticationError} = require('apollo-server-express');

const resolvers = {
   Query: {
      users: async () => {
         return User.find()
           .select('-__v -password')
      },
      user: async(parents, {username}) => {
         const user = await User.findOne({username});
         return user;
      }
   },

   Mutation: {
      addUser: async(parents, args) => {
         const newUser = await User.create({args});
         return newUser;
      },
      login: async(parents, {email, password}) => {
         const user = await User.findOne({email});
         if(!user){
            AuthenticationError('Invalid Credintials')
         }
         const correctPw = await User.isCorrectPassword(password)
         if (!correctPw) {
            AuthenticationError('Invalid Credentials')
         }
         return user;
      }
   }

}


module.exports = resolvers;