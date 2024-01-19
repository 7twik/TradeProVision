const router = require("express").Router();
const Stock = require("../model/stockmodel");

const stockName=async (req, res) => {
    try {
        const stock = await Stock.find();
        res.status(200).json(stock);
      
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  };
  const stockNameInd=async (req, res) => {
    try {
        const stock = await Stock.find({Country: "India"});
        res.status(200).json(stock);
      
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  };

module.exports = {stockName, stockNameInd};