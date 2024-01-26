const express = require("express");
const clientsController = require("../controllers/client-controler");

const router = express.Router();

router.get('/clients', clientsController.getClientsSummary);
router.get('/totals', clientsController.getTotals);
router.get('/client/:name', clientsController.getClientByName);
router.get('/clientOne/:id', clientsController.getClientById);

module.exports.load = (app) => {
  app.use('', router);
};
