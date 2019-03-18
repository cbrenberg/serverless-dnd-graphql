'use strict';

const axios = require('axios');

const ClassController = {
  index: (args) => {
    return axios.get(`${process.env.BASE_URL}/classes/${args.index}`)
      .then(response => response.data)
      .catch(error => {
        return { error: error }
      })
  }
}

module.exports = ClassController;