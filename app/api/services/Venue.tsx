import axios from 'axios';

export const fetchVenueData = async () => {
  const { data } = await axios.get('http://localhost:4000/venue');
  return data;
};
