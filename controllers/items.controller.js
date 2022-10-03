let items = require("../Items");
const { v4: uuidv4 } = require("uuid");
const getItems = (req, res) => {
  res.send(items);
};

const getItem = (req, res) => {
  const { id } = req.params;
  const item = items.find((item) => item.id === Number(id));
  if (item) {
    res.send(item);
  }
  res.status(404).send({ message: "Item not found" });
};

const postItem = (req, res) => {
  const item = req.body;
  const newItem = { id: uuidv4(), ...item };
  items.push(newItem);
  console.log(newItem);

  res.status(201).send(items);
};

const deleteItem = (req, res) => {
  const { id } = req.params;
  items = items.filter((item) => item.id !== Number(id));
  res.status(200).send(items);
};

const updateItem = (req, res) => {
  const { id } = req.params;
  const { name, price } = req.body;
  const item = items.find((item) => item.id === Number(id));
  if (item) {
    item.name = name;
    item.price = price;
    res.send(items);
  }
  res.status(404).send({ message: "Item not found" });
};

module.exports = {
  getItems,
  getItem,
  postItem,
  deleteItem,
  updateItem,
};
