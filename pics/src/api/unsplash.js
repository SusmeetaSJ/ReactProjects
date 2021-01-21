import axios from 'axios';
export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID daPSin8u1qJvJKtbQo9abvspiQh07ecuasgjIgaDN-0'
      }
})