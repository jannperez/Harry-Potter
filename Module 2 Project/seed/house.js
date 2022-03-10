const db = require("../db")
const House = require("../models/Houses")
db.on("error", console.error.bind(console, "MongoDB connection error"));

const main = async () => {

    
    const house = [
        {
         House_Name: "Gryffindor",
         House_Banner: "Red Banner, with Lion",
         Teacher: "Female Teache",
        },
        {
         House_Name: "Slytherin",
         House_Banner: "Green Banner, with Snake",
         Teacher: "Male Teacher",
        },
        {
         House_Name: "Hufflepuff",
         House_Banner: "Yellow Banner and Badger",
         Teacher: "Male Teacher",
        },
        {
         House_Name: "Ravenclaw",
         House_Banner: "Blue banner, with Eagle",
         Teacher: "Female Teacher"
        }
    ]
    await House.insertMany(house);
    console.log("Abracadabra");

}
const run = async () => {
    await main();
    db.close();
  };

  run();