import axios from "axios";
//retrieves data from the Event table
export const fetchEventData = async (): Promise<[]> => {
  const {data} = await axios.get("http://localhost:4000/events");
  return data;
};
//retrieves data from the Event_Creation table
export const fetchEventCreationData = async (): Promise<[]> => {
  const {data} = await axios.get("http://localhost:4000/event_creation");
  return data;
};
