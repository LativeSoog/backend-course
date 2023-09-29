const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const cors = require("cors");
const userRouter = require("./routes/users");
const bookRouter = require("./routes/books");
const logOne = require("./middlewares/logOne");

dotenv.config();
const { PORT = 3000, API_URL = "http://127.0.0.1" } = process.env;

const app = express();

app.use(cors());
app.use(logOne);
app.use(bodyParser.json());

app.get("/", (request, response) => {
  response.writeHead(200);
  response.end(`Hello, ${request.query.hello}`);
});

app.use(userRouter);
app.use(bookRouter);

app.listen(PORT, () => {
  console.log(`Server is running - ${API_URL}:${PORT}`);
});
