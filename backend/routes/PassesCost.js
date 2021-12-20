const express = require("express");
const router = express.Router();
const { date_format, date_greater_or_equal } = require("./date_functions");
const fs = require("fs");
const { Visitor } = require("../models/visitor");
let raw_data = fs.readFileSync("./Data/passes.json");
let passes = JSON.parse(raw_data);
const time_logger = require("./time_logger");

router.get("/:op1_ID/:op2_ID/:date_from/:date_to", time_logger, (req, res) => {
  const { op1_ID, op2_ID, date_from, date_to } = req.params;
  let PassesCost = 0;
  const PassesAnal = passes
    .filter(
      (pass) =>
        op1_ID === pass.stationRef.substring(0, 2) &&
        op2_ID === pass.hn &&
        date_greater_or_equal(pass.timestamp, date_from) &&
        date_greater_or_equal(date_to, pass.timestamp)
    )
    .map((pass) => {
      const { charge } = pass;
      Charge = Number(charge);
      PassesCost += Charge;
      return {
        Charge,
      };
    });
  PassesCost = PassesCost.toFixed(2);

  console.log(PassesCost);

  const NumberOfPasses = Object.keys(PassesAnal).length;
  const gigajson = {
    op1_ID,
    op2_ID,
    RequestTimestamp,
    PeriodFrom,
    PeriodTo,
    NumberOfPasses,
    PassesCost,
  };

  res.status(200).json(gigajson);
});

module.exports = router;