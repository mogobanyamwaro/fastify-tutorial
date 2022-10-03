const items = require("../Items");
const {
  getItems,
  getItem,
  postItem,
  deleteItem,
  updateItem,
} = require("../controllers/items.controller");
const Item = {
  type: "object",
  properties: {
    id: { type: "number" },
    name: { type: "string" },
    price: { type: "number" },
  },
};

const updateItemOptions = {
  schema: {
    body: {
      type: "object",
      properties: {
        name: { type: "string" },
        price: { type: "number" },
      },
    },
    params: {
      type: "object",
      properties: {
        id: { type: "string" },
      },
    },
    response: {
      200: {
        type: "object",
        properties: {
          id: { type: "string" },
          name: { type: "string" },
          price: { type: "number" },
        },
      },
    },
  },
  handler: updateItem,
};

const deleteItemOptions = {
  schema: {
    params: {
      type: "object",
      properties: {
        id: { type: "string" },
      },
    },
    response: {
      200: {
        type: "array",
        items: Item,
      },
    },
  },
  handler: deleteItem,
};

const postItemOPtions = {
  schema: {
    body: {
      type: "object",
      properties: {
        name: { type: "string" },
        price: { type: "number" },
      },
    },
    response: {
      201: {
        type: "array",
        items: Item,
      },
    },
  },
  handler: postItem,
};

const getItemsOPtions = {
  schema: {
    response: {
      200: {
        type: "array",
        items: Item,
      },
    },
  },
  handler: getItems,
};

const getItemOptions = {
  schema: {
    response: {
      200: Item,
    },
    params: {
      type: "object",
      properties: {
        id: { type: "string" },
      },
    },
  },
  handler: getItem,
};

function itemsRoutes(fastify, options, done) {
  fastify.get("/items", getItemsOPtions);

  fastify.get("/items/:id", getItemOptions);

  fastify.post("/items", postItemOPtions);
  fastify.delete("/items/:id", deleteItemOptions);
  fastify.put("/items/:id", updateItemOptions);

  done();
}

module.exports = itemsRoutes;
