// src/utils/urlUtils.js

const BASE_URL = 'http://127.0.0.1:8000/'; // Replace with your actual base URL

export const getImageUrl = (imageUrl) => {
  if (imageUrl.startsWith('http://') || imageUrl.startsWith('https://')) {
    return imageUrl;
  }
  return `${BASE_URL}${imageUrl}`;
};
