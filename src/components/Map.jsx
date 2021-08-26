import React from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

const Map = ({ data }) => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.MAP_API_KEY,
  });

  const mapStyles = {
    height: '50vh',
    with: '100%',
  };
  const defaultCenter = {
    lat: data.lat,
    lng: data.lng,
  };

  return isLoaded ? (
    <GoogleMap mapContainerStyle={mapStyles} center={defaultCenter} zoom={9}>
      <Marker position={defaultCenter} />
    </GoogleMap>
  ) : (
    <></>
  );
};

export default React.memo(Map);
