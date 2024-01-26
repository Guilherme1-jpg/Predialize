const express = require("express");
const cors = require("cors");
const clientRoutes = require("../src/routes/clientRoute")

const app = express();
app.use(cors());

clientRoutes.load(app);

const PORT = process.env.PORT || 3004;
app.listen(PORT, () => {
  console.log(`Api running at ::${PORT}`);
});
