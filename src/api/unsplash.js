import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com/',
    headers: {
        Authorization:
          'Client-ID OLLJrlKU8sGAg9eoEp_vKyel5tZbGOmDuZYbuw5-OJA',
      },
})