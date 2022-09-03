const {Schema, model} = require('mongoose');
const bcrypt = require('bcrypt');
const Diet = require('./Diet');


// defining the user schema
const userSchema = new Schema(
   {
      username:{
         type: String,
         required: true,
         unique: true,
         trim: true,
      },
      email: {
         type: String,
         required: true,
         unique: true,
         match: [/.+@.+\..+/, 'Must match an email address!']
      },
      password: {
         type: String,
         required: true,
         unique: true,
         minlength: 5
      },
      gender: {
         type: String,
         required: true,
         enum:['Male', 'Female',"Gender Diverse"]
      },

      weight:{
         type: Number,
         required: true
      },

      level: {
         type: String,
         required: true,
         enum:["Beginner", "Proficient","Casual","Expert"]
      },

      dateOfBirth: {
         type: String,
         required: true
      },

      description:{
         type: String,
      },
      // reference the Diet model. A user is going to have a list of diets
      diet: [
         {
            type: Schema.Types.ObjectId,
            ref: 'Diet'
         }
      ],
      routine: [
         {
            type: Schema.Types.ObjectId,
            ref: 'Routine'
         }
      ]
   },
   {
      toJSON: {
         getters: true
      }
   }
);

userSchema.virtual('age').get(function() {
   const today = new Date();
   const birthDay = new Date(this.dateOfBirth)
   let age = today.getFullYear() - birthDay.getFullYear();
   const month = today.getMonth() - birthDay.getMonth();
   if (month < 0) {
      age--
   };
   return age;
});

// pre save middleware. It will be run before a newly created user is saved in the databse
userSchema.pre('save', async function(next) {
   if (this.isNew || this.isModified('password')) {
     const saltRounds = 10;
     this.password = await bcrypt.hash(this.password, saltRounds);
   }
 
   next();
 });

 // this will be used for verifying the user password. This will be used in the resolver. 
userSchema.methods.isCorrectPassword = async function(password) {
   return bcrypt.compare(password, this.password);
}

// turn schema into a model to be used
const User = model('User', userSchema);

module.exports = User;