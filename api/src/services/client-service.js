const dataClients = require('./../../clients.mock');

module.exports = {
  getClientsSummary: () => {
    const clientsSummary = dataClients.map((client) => {
      const totalEnterprises = client.enterprises.length;
      const totalRealties = client.enterprises.reduce((acc, enterprise) => acc + parseInt(enterprise.realties, 10), 0);

      return {
        _id: client._id,
        name: client.name,
        image_src: client.image_src,
        totalEnterprises,
        totalRealties,
      };
    });

    return clientsSummary;
  },

  getTotals: () => {
    let totalClientes = 0;
    let totalEmpreendimentos = 0;
    let totalImoveis = 0;

    dataClients.forEach((info) => {
      totalClientes += 1;
      totalEmpreendimentos += info.enterprises.length;

      info.enterprises.forEach((empreendimento) => {
        totalImoveis += parseInt(empreendimento.realties, 10) || 0;
      });
    });

    const resultado = {
      totalClientes,
      totalEmpreendimentos,
      totalImoveis,
    };

    return resultado;
  },

  getClientByName: (name) => {
    const client = dataClients.find((cliente) => cliente.name === name);

    if (!client) {
      return null; 
    }

    const totalImoveis = client.enterprises.reduce(
      (acc, empreendimento) => acc + parseInt(empreendimento.realties, 10) || 0,
      0
    );

    const clienteInfo = {
      _id: client._id,
      image_src: client.image_src,
      nome: client.name,
      totalImoveis,
    };

    return clienteInfo;
  },

  getClientById: (id) => {
    const client = dataClients.find((cliente) => cliente._id === id);

    if (!client) {
      return null; 
    }

    const totalImoveis = client.enterprises.reduce(
      (acc, empreendimento) => acc + parseInt(empreendimento.realties, 10) || 0,
      0
    );

    const clienteInfo = {
      _id: client._id,
      image_src: client.image_src,
      nome: client.name,
      totalImoveis,
    };

    return clienteInfo;
  },
};
