import React, { useLayoutEffect, useRef } from 'react'
import './Map.css'

const HereMap = ({ earthquakes }) => {
  const mapRef = useRef(null);
  const H = window.H;

  const addCircleToMap = (map, lat, lng, rad) => {
    map.addObject(new H.map.Circle(
      { lat, lng },
      rad,
      {
        style: {
          strokeColor: 'rgba(55, 85, 170, 0.6)',
          lineWidth: 2,
          fillColor: 'rgba(0, 128, 0, 0.7)'
        }
      }
    ));
  }

  const moveMap = (map, lat, lng) => {
    map.setCenter({ lat, lng });
    map.setZoom(0);
  }

  useLayoutEffect(() => {
    if (!mapRef.current) return;
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

    earthquakes.forEach(earthquake => {
      const [lng, lat, rad] = earthquake.geometry.coordinates;
      addCircleToMap(hMap, lat, lng, rad * 1000)
    })

    return () => {
      hMap.dispose();
    };
  }, [mapRef]);

  return <div className="map" ref={mapRef} />;
};

export default HereMap;
