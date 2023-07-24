import axios from 'axios';

export const fetchEventData = async () => {
  const { data } = await axios.get('http://localhost:4000/events');
  // console.log(data);
  return data;
};
