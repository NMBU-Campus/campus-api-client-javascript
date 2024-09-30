require('dotenv').config();
const ApiClient = require('./CampusApiClient');

const clientId = process.env.CLIENT_ID;
const clientSecret = process.env.CLIENT_SECRET;
const tenantId = process.env.TENANT_ID;
const campusApiUrl = process.env.CAMPUS_API_URL;
const sensorId = process.env.SENSOR_ID;

console.log('Authenticating...');
const apiClient = new ApiClient(clientId, clientSecret, tenantId, campusApiUrl);
console.log('Authenticated');


async function main() {
    try {
        console.log('Fetching observations...');
        const observations = await apiClient.getObservations(sensorId, '2024-09-26T06:48:06+0200', '2024-09-27T06:48:06+0200', 'dtmi:org:brickschema:schema:Brick:Energy_Usage_Sensor;1');
        console.log('Observations:', observations);
    } catch (error) {
        console.error('Error:', error);
    }
}

main();