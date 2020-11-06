import React, { useLayoutEffect, useRef } from 'react'
import './Map.css'

const HereMap = ({ setMap }) => {
  const mapRef = useRef(null);

  useLayoutEffect(() => {
    if (!mapRef.current) return;
    const platform = new window.H.service.Platform({
      apikey: process.env.REACT_APP_HERE_MAPS_API_KEY
    });
    const defaultLayers = platform.createDefaultLayers();

    const hMap = new window.H.Map(mapRef.current, defaultLayers.vector.normal.map, {
      center: { lat: 50, lng: 5 },
      zoom: 4,
      pixelRatio: window.devicePixelRatio || 1
    });

    // eslint-disable-next-line no-unused-vars
    const behavior = new window.H.mapevents.Behavior(new window.H.mapevents.MapEvents(hMap));
    // eslint-disable-next-line no-unused-vars
    const ui = window.H.ui.UI.createDefault(hMap, defaultLayers);

    setMap(hMap)

    return () => {
      hMap.dispose();
    };
  }, [mapRef]);

  return <div className="map" ref={mapRef} />;
};

export default HereMap;
