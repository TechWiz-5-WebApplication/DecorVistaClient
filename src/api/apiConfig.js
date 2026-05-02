// Development URL
// export const API_URL = 'http://127.0.0.1:8000/api';

// Production URL - Update this with your actual backend domain
export const API_URL = process.env.NODE_ENV === 'production' 
  ? 'https://your-backend-domain.com/api' 
  : 'http://127.0.0.1:8000/api';
