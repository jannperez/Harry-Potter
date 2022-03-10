const { Router } = require("express");
//const controllers = require('../controllers');
const router = Router();

router.get("/", (req, res) => res.send("Abracadabra!"));
module.exports = router;