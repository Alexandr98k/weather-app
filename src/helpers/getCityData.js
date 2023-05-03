import { TIMEOUT_SEC } from './../config';
import { timeout } from './../helper';
//get coords and name of city
const getCityData = async function (value, key) {
  try {
    const url = `https://api.openweathermap.org/geo/1.0/direct?q=${value}&limit=5&appid=${key}`;

    const resCoords = await Promise.race([fetch(url), timeout(TIMEOUT_SEC)]);

    if (!resCoords.ok) {
      throw new Error('Problem with getting coordinates by name of city');
    }

    const data = await resCoords.json();

    if (data.length === 0) {
      throw new Error('Entered name of city not found!');
    }

    return {
      lat: data[0].lat,
      lon: data[0].lon,
      name: data[0].name,
    };
  } catch (error) {
    //throw error from low async function to the parent async function
    throw error;
  }
};

export default getCityData;
