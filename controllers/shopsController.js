const Shop = require("../models/shopSchema");

// adding a new shop
const createShop = async (req, res) => {
  const newShop = new Shop({
    name: req.body.name,
    location: req.body.location,
    email: req.body.email,
    dob: req.body.dob,
  });

  await newShop.save();
  res.status(201).json(newShop);
};

// get all shops
const getAllShops = async (req, res) => {
  const shop = await Shop.find();
  res.json(shop);
};

//get a shop
const getSingleShop = async (req, res) => {
  const shop = await Shop.findById(req.params._id);
  res.json(shop);
};

// update a shop
const updateShop = async (req, res) => {
  const foundShop = await Shop.findById(req.params._id);
  if (foundShop) {
    (foundShop.name = req.body.name ? req.body.name : foundShop.name),
      (foundShop.location = req.body.location
        ? req.body.location
        : foundShop.location),
      (foundShop.email = req.body.email ? req.body.email : foundShop.email),
      (foundShop.dob = req.body.dob ? req.body.dob : foundShop.dob);

    const updatedShop = await foundShop.save();
    res.json({ updatedShop });
  }
};

//delete a shop
const deleteShop = async (req, res) => {
  const foundShop = await Shop.findById(req.params._id);
  if (foundShop) {
    foundShop.remove();
    res.json({ msg: ` ${foundShop.name} removed` });
  } else {
    res.status(404).json({ error: "Shop not found" });
  }
};

module.exports = {
  createShop,
  getAllShops,
  getSingleShop,
  updateShop,
  deleteShop,
};
