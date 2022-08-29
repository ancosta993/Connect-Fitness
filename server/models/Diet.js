const {Schema, model}  = require('mongoose');


// definet he Deit Schema
const dietSchema = new Schema(
   {
      name:{
         type: String,
         required: true
      },
      mealTime:{
         type: Date,
         required: true,
         enum: ['Breakfast', 'Lunch', 'Dinner', 'Snack'] // these are the only possible values. Any other given value will through a Validation Error
      },
      calorie: {
         type: Number,
      },
      Details:{
         type: String
      }
   }
);

const Diet = model('Diet', dietSchema);

module.exports = Diet;