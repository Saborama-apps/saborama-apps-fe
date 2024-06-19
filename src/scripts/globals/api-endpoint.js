import CONFIG from './config';

const API_ENDPOINT = {
  HOME: `${CONFIG.BASE_URL}api/v1/makanan`,
  DETAIL: (id) => `${CONFIG.BASE_URL}api/v1/makanan/${id}`,
  DAERAH: `${CONFIG.BASE_URL}api/v1/daerah`,
  DETAILDAERAH: (daerahId) => `${CONFIG.BASE_URL}api/v1/daerah/${daerahId}`,
  ADD_REVIEW: `${CONFIG.BASE_URL}api/v1/coment`,
};

export default API_ENDPOINT;
