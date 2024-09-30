# campus-api-client-javascript

This is a public SDK for interacting with the Campus API. It allows you to easily fetch observations and other data from the Campus API using JavaScript.

## Features

- Fetch observations from the Campus API
- Simple and easy-to-use interface
- Suitable for beginners and experienced developers alike


## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
  - [Authentication](#authentication)
  - [Fetching Observations](#fetching-observations)
- [Environment Variables](#environment-variables)
- [Running from Command Line](#running-from-command-line)
- [Error Handling](#error-handling)

## Installation

First, you need to install the necessary dependencies. You can do this using npm:

```sh
npm install axios jsonwebtoken dotenv
```


## Usage
Here's a basic example of how to use the SDK to fetch observations:


### Authentication
To authenticate with Azure, you need to provide your client_id, client_secret, and tenant_id. The SDK will use these credentials to obtain a JWT token.  
### Fetching Observations
Once authenticated, you can use the SDK to fetch observations from your API.

*Example*
Here is an example of how to use the SDK:


```
const CampusApiClient = require('campus-api-client-javascript');

const client = new CampusApiClient(clientId, clientSecret, tenantId, campusApiUrl);

client.getObservations(sensorId, startTime, endTime, brickScheemaSensorType )
  .then(observations => {
    console.log(observations);
  })
  .catch(error => {
    console.error('Error fetching observations:', error);
  });
  ```
  Please see Brick Scheema ,eg [Energy_Usage_Sensor](https://ontology.brickschema.org/brick/Energy_Usage_Sensor.html) for how the senor type should be formatted.
## Environment Variables
To keep your credentials secure, you should store them in a .env file in the root of your project. See [.env_template](./.env_template) for example
```
CLIENT_ID=your-client-id
CLIENT_SECRET=your-client-secret
TENANT_ID=your-tenant-id
```

## Running from Command Line
To run the SDK from the command line, edit the [index.js](index.js) .

Then, run the following command in your terminal:
```
node index.js
```

## Error Handling
The SDK includes basic error handling. If authentication fails or fetching observations fails, an error message will be logged to the console.  

## License
This project is licensed under the Apache 2.0 License.