import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/';

const params = ({ q, page }) =>
  (axios.defaults.params = {
    q,
    page,
    key: '25303063-e3dfa67f3227afe1b77421770',
    image_type: 'photo',
    orientation: 'horizontal',
    per_page: 12,
  });

export const getImg = async (q = 'Summer', page = 1) => {
  params({ q, page });
  try {
    const res = await axios.get('api/');
    if (!res.data.hits.length) {
      throw new Error('Not found');
    }
    return res.data.hits;
  } catch (err) {
    throw err;
  }
};
