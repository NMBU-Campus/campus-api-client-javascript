const axios = require('axios');
const jwt = require('jsonwebtoken');

class ApiClient {
    constructor(clientId, clientSecret, tenantId, campusApiUrl) {
        this.clientId = clientId;
        this.clientSecret = clientSecret;
        this.tenantId = tenantId;
        this.token = null;
        this.campusApiUrl = campusApiUrl;
        console.log('campusApiUrl:', campusApiUrl);
    }

    async authenticate() {
        const url = `https://login.microsoftonline.com/${this.tenantId}/oauth2/v2.0/token`;
        const params = new URLSearchParams();
        params.append('grant_type', 'client_credentials');
        params.append('client_id', this.clientId);
        params.append('client_secret', this.clientSecret);
        params.append('scope', 'api://41425158-23d9-456c-a471-51e7669411fa/.default');

        try {
            const response = await axios.post(url, params);
            this.token = response.data.access_token;
        } catch (error) {
            console.error('Authentication failed:', error);
            throw new Error('Authentication failed');
        }
    }

    async getObservations(sensorId, startTime, endTime, sensorType) {
        if (!this.token) {
            await this.authenticate();
        }
        let url = `${this.campusApiUrl}/observations/sensors?`;
        if (startTime !== null) {
            startTime = startTime.replace('+', '%2B');
            url += `&start_time=${startTime}`;
        }
        if (endTime !== null) {
            endTime = endTime.replace('+', '%2B');
            url += `&end_time=${endTime}`;
        }
        if (sensorType !== null) {
            url += `&sensor_type=${sensorType}`;
        }
        if (sensorId !== null) {
            url += `&id=${sensorId}`;
        }
        url = url.replace('?&', '?');
        console.log('Fetching observations from:', url);
        
        const headers = {
            'Authorization': `Bearer ${this.token}`,
            'Content-Type': 'application/json'
        };

        try {
            const response = await axios.get(url, { headers });
            return response.data;
        } catch (error) {
            console.error('Failed to fetch observations:', error);
            throw new Error('Failed to fetch observations');
        }
    }
}

module.exports = ApiClient;