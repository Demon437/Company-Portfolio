const Service = require("../models/service");

exports.getServices = async (req, res) => {
  const data = await Service.find();
  res.json(data);
};

exports.createService = async (req, res) => {
  const data = new Service(req.body);
  await data.save();
  res.json(data);
};
