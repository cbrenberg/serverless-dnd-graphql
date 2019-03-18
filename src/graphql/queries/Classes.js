'use strict';

const {
  GraphQLList,
} = require('graphql');

// import the Class type we created
const ClassType = require('../types/classType');

// import the Class resolver we created
const ClassesResolver = require('../resolvers/classesResolver');

module.exports = {
  index() {
    return {
      type: new GraphQLList(ClassType),
      resolve: (root, args) => {
        return ClassesResolver.index(args);
      }
    }
  },
};