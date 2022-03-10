const db = require("../db")
const Student = require("../models/HogwartsStudents")
db.on("error", console.error.bind(console, "MongoDB connection error"));


const main = async () => {
   const student = [
       {
        name: "Harry Potter",
        age: "10",
        race: "Wizard",
        house: "Gryffindor",
        patronus: "A Stag",
        wands: "11 inches long, made of holly, and Phoenix feather",

        name: "Ron Weasly",
        age: "10",
        race: "Wizard",
        house: "Gryffindor",
        patronus:"Jack Russell Terrier",
        wands: "14 inches, willow, and unicorn hair",

        name: "Hermione Jean Granger",
        age: "10",
        race: "Witch",
        house: "Gryffindor",
        patronus: "Otter",
        wands: "10.5 inches, vine wood, and dragon heartstring",

        name: "Draco Malfoy",
        age: "10",
        race: "Wizard",
        house: "Slytherin",
        patronus: "Dragon",
        wands: "10 inches long, hawthorne wood, and unicorn hair",

        name: "Neville Longbottom",
        age: "10",
        race: "Wizard",
        house: "Hufflepuff",
        patronus: "Non-corporeal",
        wands: "Unknown, Passed down to him",

        name: "Luna Lovegood",
        age: "10",
        race: "Witch",
        house: "Ravenclaw",
        patronus: "Rabbit",
        wands: "Unknown"


      }
   ] 
    
    await Student.insertMany(student);
    console.log("Abracadabra");










}
const run = async () => {
    await main();
    db.close();
  };

  run();
