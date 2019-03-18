'use strict';

//import GraphQL
const {
  GraphQLSchema,
  GraphQLObjectType
} = require('graphql');

//import project queries
const SpellQuery = require('../graphql/queries/Spell');
const SpellsQuery = require('../graphql/queries/Spells');
const ClassQuery = require('../graphql/queries/Class');
const ClassesQuery = require('../graphql/queries/Classes');


const RootQuery = new GraphQLObjectType({
  name: 'Root',
  description: 'This is the default query provided by this application',

  fields: {
    spell: SpellQuery.index(),
    spells: SpellsQuery.index(),
    class: ClassQuery.index(),
    classes: ClassesQuery.index()
  }
})

module.exports = new GraphQLSchema({
  query: RootQuery,
})