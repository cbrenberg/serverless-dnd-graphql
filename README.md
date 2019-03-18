# Serverless D&D GraphQL

### A GraphQL implementation for AWS Lambda that provides Dungeons and Dragons game data.

## Overview
This project was originally created as a [traditional Node.JS application](https://github.com/cbrenberg/dnd-graphql), and was refactored to run as a Lambda function on AWS.

It currently acts as a GraphQL layer built on top of the publicly available [D&D 5e REST API](http://www.dnd5eapi.co/), but with plans to eventually migrate the data into an AWS data store.

## Getting Started

### Development
To get started developing your own implementation:
1. Clone or download this repository onto your local development machine. 
1. Ensure you have Node and NPM installed on your machine.
1. Navigate to the directory containing the project, run `npm install`
1. To test the application locally, you will need to create a .env file with the following key and value
    * BASE_URL = 'http://dnd5eapi.co/api'
1. From the project's main directory, run `node server.js`. The application will run on http://localhost:3000, and you can access the Graphiql user interface for testing queries at http://localhost:3000/graphql

### Deploying to AWS
You will first need an AWS account.
1. First, from inside your project directory, select all files and folders and create a .zip file
1. From the AWS Console, choose the Lambda service.
1. Choose 'Create Function', then 'Author from scratch'
1. Give the function a name of your choice
1. Provide the function a suitable IAM role with, at minimum, Cloudwatch permissions.
1. Again click 'Create Function'
1. From the dropdown above the code editor, choose to upload a .zip file and select the file you created previously


To run the Lambda code, you will need to decide how the function will be triggered. I connected an API Gateway with GET and POST routes (if you choose this method, make sure to select Lambda Proxy Integration for each route). 

Good luck!