//jshint esversion:6

const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/fruitsDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const fruitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Add a name."]
  },
  rating: {
    type: Number,
    min: 1,
    max: 10
  },
  review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit({
  name: "Apple",
  rating: 9,
  review: "Pretty solid as a fruit."
});

// fruit.save();

const personSchema = new mongoose.Schema({
  name: String,
  age: Number,
  favouriteFruit: fruitSchema
});

const Person = mongoose.model("Person", personSchema);

// const mango = new Fruit({
//   name: "Mango",
//   Rating: 10,
//   review: "Best."
// });
// 
// mango.save();
//
// const person = new Person({
//   name: "Amy",
//   age: 14,
//   favouriteFruit: pineapple
// });
//
// person.save();

// const kiwi = new Fruit ({
//   name: "Kiwi",
//   rating: 10,
//   review: "Best one!"
// });
//
// const orange = new Fruit ({
//   name: "Orange",
//   rating: 4,
//   review: "Too sour for me."
// });
//
// const banana = new Fruit ({
//   name: "Banana",
//   rating: 8,
//   review: "Energetic!"
// });
//
// // Fruit.insertMany([kiwi,orange,banana], function(err) {
// //   if(err) {
// //     console.log(err);
// //   } else {
// //     console.log("Successfully saved to fruits!");
// //   }
// // });

Fruit.find(function(err, fruits) {
  if (err) {
    console.log(err);
  } else {

    mongoose.connection.close();

    fruits.forEach(function(fruit) {
      console.log(fruit.name);
    });
  }
});

// Person.updateOne({
//   name: "John"
// }, {
//   favouriteFruit: mango
// }, function(err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Successfully updated the document.");
//   }
// });

// Fruit.deleteOne({name : "Banana"}, function(err) {
//   if(err) {
//     console.log(err);
//   } else {
//     console.log("Successfully deleted the document");
//   }
// });

// Person.deleteMany({}, function(err) {
//   if(err){
//     console.log(err);
//   } else {
//     console.log("Successfully deleted all!");
//   }
// });
