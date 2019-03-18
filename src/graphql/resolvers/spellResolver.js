'use strict';

const axios = require('axios');

const SpellController = {
  index: (args) => {
    return axios.get(`${process.env.BASE_URL}/spells/${args.index}`)
      .then(response => response.data)
      .catch(error => {
        return { error: error }
      })
  }
}

module.exports = SpellController;