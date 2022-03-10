const db = require("../db")
const Student = require("../models/HogwartsWands")
db.on("error", console.error.bind(console, "MongoDB connection error"));

const main = async () => {
    const wand = [
    {
        age_restriction: "10",
        wand_material: "",
        access_to_magic: "",
        
    },
    {
        age_restriction: "10",
        wand_material: "",
        access_to_magic: "",
        
    },
    {
        age_restriction: "10",
        wand_material: "",
        access_to_magic: "",
        
    }, {
        age_restriction: "10",
        wand_material: "",
        access_to_magic: "",
        
    },
    {
        age_restriction: "10",
        wand_material: "",
        access_to_magic: "",
        
    },
    {
        age_restriction: "10",
        wand_material: "",
        access_to_magic: "",
        
    },
]

await Wand.insertMany(Wand);
    console.log("Abracadabra");










}
const run = async () => {
    await main();
    db.close();
  };

  run();


