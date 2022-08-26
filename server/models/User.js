const {Schema, model} = require('mongoose');
const bcrypt = require('bcrypt');

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
      }
   }
)

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