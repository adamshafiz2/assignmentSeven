const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const connectDb = require("./config/connectDB");
const shopsRoute = require("./routes/shopsRoute");
const usersRoute = require("./routes/usersRoute");

dotenv.config();

const app = express();

// connection
connectDb();

// middlewares
app.use(morgan("dev"));
app.use(express.json());

// routes
app.use("/api/v1/shops", shopsRoute);
app.use("/api/v1/users", usersRoute);

//home route
app.get("/", (req, res) => {
  res.send("<h1>Welcome to Our Marketplace</h1>");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server is operating on port ${PORT}`));
