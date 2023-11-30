const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.static("../client/dist"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
require("./routes/htmlRoutes")(app);

// Start server
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
