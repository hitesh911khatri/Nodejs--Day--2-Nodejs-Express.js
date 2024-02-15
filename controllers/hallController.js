const Hall = require("../models/Hall");

const createHall = async (req, res, next) => {
  const newHall = new Hall(req.body);
  try {
    const savedHall = await newHall.save();
    res.status(200).json(savedHall);
  } catch (err) {
    res.status(500).json(err);
  }
};

const updateHall = async (req, res, next) => {
  try {
    const updatedHall = await Hall.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedHall);
  } catch (err) {
    res.status(500).json(err);
  }
};

const deleteHall = async (req, res, next) => {
  try {
    await Hall.findByIdAndDelete(req.params.id);
    res.status(200).json("hall has been deleted");
  } catch (err) {
    res.status(500).json(err);
  }
};

const getHall = async (req, res, next) => {
  try {
    const getHalll = await Hall.findById(req.params.id);
    res.status(200).json(getHalll);
  } catch (err) {
    res.status(500).json(err);
  }
};

const getAllHall = async (req, res, next) => {
  try {
    const getAllHalll = await Hall.find();
    res.status(200).json(getAllHalll);
  } catch (err) {
    next(err);
  }
};
module.exports = { createHall, getAllHall, updateHall, getHall, deleteHall };
