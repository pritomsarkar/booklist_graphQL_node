const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const mongoose = require("mongoose");

const schema = require("./schema/schema");
const { MONGODB } = require("./config");

const PORT = 6008;
const app = express();

app.use("/graphql", graphqlHTTP({ schema, graphiql: true }));

mongoose
  .connect(MONGODB, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(() => {
    console.log("MongoDb Connceted successfully");
    return app.listen(PORT);
  })
  .then(() => {
    console.log(`server running at localhost:${PORT}`);
  });
