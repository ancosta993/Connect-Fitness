const { User, Diet, Routine}  = require('../models');
const {AuthenticationError} = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const resolvers = {
   Query: {
      users: async () => {
         return User.find()
           .select('-__v -password')
           .populate('follow')
           .populate('followers');
      },
      user: async(parents, {username}) => {
         return User.findOne({username})
            .select('-__v -password')
            .populate('diet')
            .populate('routine')
            .populate('follow')
            .populate('followers')

      },
      me: async(parents, args, context) => {
         if (context.user) {
            const userData = await User.findById({ _id: context.user._id })
               .select('-_v -password')
               .populate('diet')
               .populate('routine');

            return userData;
         }
         throw new AuthenticationError("User Not Logged In")
      },

      diets: async(parents, {username}) => {
         const params = username ? {username} : {};
         return Diet.find(params);
      },
      routines: async(parents, {username}) => {
         const params = username ? {username} : {};
         return Routine.find(params);
      }
   },

   Mutation: {
      addUser: async(parents, args) => {
         // args.weight = parseInt(args.weight);
         // args.age = parseInt(args.age);
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
            const newDiet = await Diet.create({...args, username: context.user.username});

            await User.findByIdAndUpdate(
               {_id:context.user._id},
               {$push: {diet: newDiet._id}},
               { new: true }
            );
   
            return newDiet;
         }

         throw new AuthenticationError('You need to be logged In!');
      },
      addRoutine: async(parents, args, context) => {
         if(context.user) {
            const newRoutine = await Routine.create({...args, username: context.user.username});

            await User.findByIdAndUpdate(
               {_id: context.user._id},
               {$push: {routine: newRoutine._id}},
               { new: true }
            );
   
            return newRoutine;
         }

         throw new AuthenticationError('You need to be logged In!');
      },

      addFollower: async(parent, {followerId}, context) => {
         if(context.user){
            const updatedUser = await User.findOneAndUpdate(
               {_id:context.user._id},
               {$addToSet:{follow:followerId}},
               {new:true}
            ).populate('follow');

            const updatedFollower = await User.findOneAndUpdate(
               {_id: followerId},
               {$addToSet:{followers:context.user._id}},
               {new:true}
            ).populate('followers');

            return updatedUser
         }
         throw new AuthenticationError('You need to be logged in!')
      }
   }

}


module.exports = resolvers;