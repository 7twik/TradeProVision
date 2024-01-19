const { stockName, stockNameInd } = require("./controller/controller");
const router = require("express").Router();
///////////////////For customers  ///////////////////////////
//REGISTER
router.get("/stockName", stockName);
router.get("/stockNameInd", stockNameInd);

module.exports = router;