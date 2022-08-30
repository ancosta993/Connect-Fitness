const { User, Diet }  = require('../models');
const {AuthenticationError} = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const resolvers = {
   Query: {
      users: async () => {
         return User.find()
           .select('-__v -password')
      },
      user: async(parents, {username}) => {
         const user = await User.findOne({username});
         return user;
      },
      me: async(parents, args, context) => {
         if (context.user) {
            const userData = await User.findOne({ _id: context.user._id })
               .select('-_v -password')
            return userData;
         }
         throw new AuthenticationError("User Not Logged In")
      },
   },

   Mutation: {
      addUser: async(parents, args) => {
         const newUser = await User.create(args);
         const token = signToken(newUser);
         return {newUser, token}

      },
      login: async(parents, {email, password}) => {
         const user = await User.findOne({ email });
         if(!user){
            AuthenticationError('Invalid Credintials')
         }
         const correctPw = await user.isCorrectPassword(password)
         if (!correctPw) {
            AuthenticationError('Invalid Credentials')
         }
         
         const token = signToken(user);
         return { token, user };
      },
      addDiet: async(parents, args, context) => {
         if(context.user) {
            const newDiet = await  Diet.create({...args, username: context.user.username});
         }

         await User.findByIdAndUpdate(
            {_id:context.user._id},
            {$push: {diet: newDiet._id}},
            { new: true }
         );

         return newDiet;

         throw new AuthenticationError('You need to be logged In!');
      },
   }

}


module.exports = resolvers;