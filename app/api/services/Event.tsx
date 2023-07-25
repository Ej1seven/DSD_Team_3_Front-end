import axios from 'axios';

export const fetchEventData = async () => {
  const { data } = await axios.get('http://localhost:4000/events');
  return data;
};

export const fetchEventCreationData = async () => {
  const { data } = await axios.get('http://localhost:4000/event_creation');
  return data;
};
