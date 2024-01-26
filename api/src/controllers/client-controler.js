const clientService = require("../services/client-service");
const responseUtil = require("../utiles/responseUtils");

module.exports = {
  getClientsSummary: (req, res) => {
    const clientsSummary = clientService.getClientsSummary();
    responseUtil.sendJsonResponse(res, clientsSummary);
  },
  getTotals: (req, res) => {
    const totals = clientService.getTotals();
    responseUtil.sendJsonResponse(res, totals);
  },
  getClientByName: (req, res) => {
    const clientName = req.params.name;
    const clientInfo = clientService.getClientByName(clientName);
    responseUtil.sendJsonResponse(res, clientInfo);
  },
  getClientById: (req, res) => {
    const clientId = req.params.id;
    const clientInfo = clientService.getClientById(clientId);
    responseUtil.sendJsonResponse(res, clientInfo);
  },
};
