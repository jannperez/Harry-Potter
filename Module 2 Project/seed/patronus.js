const db = require("../db")
const Student = require("../models/Patronoses")
db.on("error", console.error.bind(console, "MongoDB connection error"));

const main = async () => {
    const patronus = [
        {
           wand: "",
           protection: "",
         },
         {
            wand: "",
            protection: "",
          },
          {
            wand: "",
            protection: "",
          },
          {
            wand: "",
            protection: "",
          },
          {
            wand: "",
            protection: "",
          },
          {
            wand: "",
            protection: "",
          },
             
           

           
          

        
    ] 
     
     await Patronus.insertMany([atronus]);
     console.log("Abracadabra");
 
 
 
 
 
 
 
 
 
 
 }
 const run = async () => {
     await main();
     db.close();
   };
 
   run();
 