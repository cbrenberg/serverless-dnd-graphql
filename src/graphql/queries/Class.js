'use strict';
const GraphQL = require('graphql');
const {
  GraphQLInt,
} = GraphQL;
// import the Class type we created
const ClassType = require('../types/classType');
// import the Class resolver we created
const ClassResolver = require('../resolvers/classResolver');
module.exports = {
  index() {
    return {
      type: ClassType,
      args: {
        index: {
          type: GraphQLInt
        }
      },
      resolve: (root, args) => {
        return ClassResolver.index(args);
      }
    }
  },
};


