import axios from "axios";
//retrieves data from the Venue table
export const fetchVenueData = async (): Promise<[]> => {
  const {data} = await axios.get("http://localhost:4000/venue");
  return data;
};
