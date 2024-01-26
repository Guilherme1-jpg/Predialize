module.exports = {
  sendJsonResponse: (res, data) => {
    res.json(data);
  },
  sendNotFoundResponse: (res, message) => {
    res.status(404).json({ mensagem: message });
  },
};
