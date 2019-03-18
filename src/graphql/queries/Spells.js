'use strict';

const {
  GraphQLList,
} = require('graphql');

// import the Spell type we created
const SpellType = require('../types/spellType');

// import the Class resolver we created
const SpellsResolver = require('../resolvers/spellsResolver');

module.exports = {
  index() {
    return {
      type: new GraphQLList(SpellType),
      resolve: (root, args) => {
        return SpellsResolver.index(args);
      }
    }
  },
};