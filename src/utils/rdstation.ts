import axios from 'axios';

const send = (method, endpoint, data) => {
  return new Promise((resolve, reject) => {
    const apiKey = process.env.RD_API_KEY;
    const baseUrl = 'https://api.rd.services/';
    const defaultParams = {
      method,
      url: `${baseUrl}${endpoint}?api_key=${apiKey}`,
      data: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    };

    axios(defaultParams)
      .then((response) => resolve(response))
      .catch((error) => reject(error));
  });
};

const createConversion = (params) => {
  return new Promise((resolve, reject) => {
    const endpoint = 'platform/conversions';
    const data = {
      event_type: 'CONVERSION',
      event_family: 'CDP',
      payload: params,
    };

    send('POST', endpoint, data)
      .then((response) => resolve(response))
      .catch((error) => reject(error));
  });
};

export default {
  createConversion,
};
