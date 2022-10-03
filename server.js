const fastify = require("fastify")({ logger: true });
const PORT = 5000;
fastify.register(require("fastify-swagger"), {
  routePrefix: "/documentation",
  exposeRoute: true,
  swagger: {
    info: {
      title: "Fastify API",
    },
  },
});
const itemsRoutes = require("./routes/items");
fastify.register(itemsRoutes);

const start = async () => {
  try {
    await fastify.listen(PORT);
  } catch (error) {
    fastify.log.error(error);
    process.exit(1);
  }
};
start();
