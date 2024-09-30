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

const client = new CampusApiClient({ apiKey: 'YOUR_API_KEY' });

client.getObservations()
  .then(observations => {
    console.log(observations);
  })
  .catch(error => {
    console.error('Error fetching observations:', error);
  });
  ```
## Environment Variables
To keep your credentials secure, you should store them in a .env file in the root of your project. Here is an example of what your .env file should look like:
```
CLIENT_ID=your-client-id
CLIENT_SECRET=your-client-secret
TENANT_ID=your-tenant-id
```

## Running from Command Line
To run the SDK from the command line, create a file named index.js with the following content:
```
require('dotenv').config();
const ApiClient = require('./sdk');

const clientId = process.env.CLIENT_ID;
const clientSecret = process.env.CLIENT_SECRET;
const tenantId = process.env.TENANT_ID;

const apiClient = new ApiClient(clientId, clientSecret, tenantId);

async function main() {
    try {
        const observations = await apiClient.getObservations('Sensor-1234', '2024-04-13T06:48:06+0200', '2024-04-14T06:48:06+0200', 'CO2_SENSOR');
        console.log('Observations:', observations);
    } catch (error) {
        console.error('Error:', error);
    }
}

main();
```

Then, run the following command in your terminal:
```
node index.js
```

## Error Handling
The SDK includes basic error handling. If authentication fails or fetching observations fails, an error message will be logged to the console.  
License
This project is licensed under the Apache 2.0 License.