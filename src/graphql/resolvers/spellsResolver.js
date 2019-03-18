'use strict';

const axios = require('axios');

const SpellsController = {
  index: (args) => {
    return axios.get(`${process.env.BASE_URL}/spells`)
      .then(response => {
        const { data: { results } } = response;
        const dataToSend = results.map(async (spell) => {
          const { data } = await axios.get(spell.url);
          return data;
        })
        return dataToSend;
      })
      .catch(error => {
        return { error: error }
      })
  }
}

module.exports = SpellsController;