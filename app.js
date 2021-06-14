const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const mongoose = require("mongoose");
const cors = require("cors");

const schema = require("./schema/schema");
const { MONGODB } = require("./config");

const PORT = 6008;
const app = express();

// allow cross-origin request
app.use(cors());

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
