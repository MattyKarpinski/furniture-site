import React from 'react'
import './Map.scss';
import { useMemo } from 'react';
import {GoogleMap, useLoadScript, Marker} from "@react-google-maps/api";




export default function Map() {
  const {isLoaded} = useLoadScript({
    googleMapsApiKey: "AIzaSyARdfzIaJzsygQ9_bNj0iJVN7mm1at2UR0",
  });

  if (!isLoaded) return <div>Loading...</div>;
  return <Mapdata></Mapdata>;
}

  function Mapdata() {
    const center = useMemo(() => ({lat: 44, lng: -80}), []);

      return (
      <GoogleMap 
        zoom={10} 
        center={center} 
        mapContainerClassName="map-container"
        >

        <Marker position={center}></Marker>
      </GoogleMap>
      );
  }
