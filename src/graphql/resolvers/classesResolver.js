'use strict';

const axios = require('axios');

const ClassesController = {
  index: (args) => {
    return axios.get(`${process.env.BASE_URL}/classes`)
      .then(response => {
        const { data: { results } } = response;
        const dataToSend = results.map(async (item) => {
          const { data } = await axios.get(item.url);
          return data;
        })
        return dataToSend;
      })
      .catch(error => {
        return { error: error }
      })
  }
}

module.exports = ClassesController;