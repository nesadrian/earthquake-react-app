import React, { useLayoutEffect, useRef } from 'react'
import './Map.css'

const HereMap = () => {
  const mapRef = useRef(null);

  useLayoutEffect(() => {
    if (!mapRef.current) return;
    const H = window.H;
    const platform = new H.service.Platform({
      apikey: 'process.env.REACT_APP_HERE_MAPS_API_KEY'
    });
    const defaultLayers = platform.createDefaultLayers();
    const hMap = new H.Map(mapRef.current, defaultLayers.vector.normal.map, {
      center: { lat: 50, lng: 5 },
      zoom: 4,
      pixelRatio: window.devicePixelRatio || 1
    });

    const behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(hMap));

    const ui = H.ui.UI.createDefault(hMap, defaultLayers);

    return () => {
      hMap.dispose();
    };
  }, [mapRef]);

  return <div className="map" ref={mapRef} />;
};

export default HereMap;
