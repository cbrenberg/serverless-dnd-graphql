'use strict';
const GraphQL = require('graphql');
const {
  GraphQLInt,
} = GraphQL;
// import the Spell type we created
const SpellType = require('../types/spellType');
// import the Spell resolver we created
const SpellResolver = require('../resolvers/spellResolver');
module.exports = {
  index() {
    return {
      type: SpellType,
      args: {
        index: {
          type: GraphQLInt
        }
      },
      resolve: (root, args) => {
        return SpellResolver.index(args);
      }
    }
  },
};