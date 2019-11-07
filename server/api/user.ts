import fetch from 'isomorphic-unfetch';
import { Handler } from 'express';

const userEndpoint: Handler = (req, res, next) => {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(async (fetchResponse) => {
      if (fetchResponse.ok) {
        const userData: JSON = await fetchResponse.json();

        res.json(userData);
      } else {
        throw new Error(`Failed to fetch, status: ${fetchResponse.status}`);
      }
    })
    .catch(next);
};

export default userEndpoint;
