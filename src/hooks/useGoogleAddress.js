import { useState, useEffect } from 'react';
import axios from 'axios';

const useGoogleAddress = (address, apto, city, state) => {
  const [map, setMap] = useState({});
  const API = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}+${apto}+${city}+${state}&key=${process.env.MAP_API_KEY}`;

  useEffect(() => {
    async function fetchData() {
      const response = await axios(API);
      setMap(response.data.results[0].geometry.location);
    }
    fetchData();
  }, []);
  return map;
};

export default useGoogleAddress;
