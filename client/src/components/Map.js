import React, { useLayoutEffect, useRef, useEffect } from 'react'
import './Map.css'

const HereMap = ({ earthquakes, toggleSelected }) => {
  const mapRef = useRef(null);
  const H = window.H;

  const getCircle = (lat, lng, rad, selected) =>
    new H.map.Circle(
      { lat, lng },
      rad,
      selected ?
        {
          style: {
            strokeColor: 'rgba(55, 85, 170, 0.6)',
            lineWidth: 2,
            fillColor: 'rgba(0, 0, 0, 0.7)'
          }
        } :
        {
          style: {
            strokeColor: 'rgba(55, 85, 170, 0.6)',
            lineWidth: 2,
            fillColor: 'rgba(0, 128, 0, 0.7)'
          }
        }
    );

  const moveMap = (map, lat, lng) => {
    map.setCenter({ lat, lng });
    map.setZoom(0);
  }

  useEffect(() => {
    if (!mapRef.current) return;
    const platform = new H.service.Platform({
      apikey: process.env.REACT_APP_HERE_MAPS_API_KEY
    });
    const defaultLayers = platform.createDefaultLayers();
    const hMap = new H.Map(mapRef.current, defaultLayers.vector.normal.map, {
      center: { lat: 50, lng: 5 },
      zoom: 4,
      pixelRatio: window.devicePixelRatio || 1
    });

    // eslint-disable-next-line no-unused-vars
    const behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(hMap));
    // eslint-disable-next-line no-unused-vars
    const ui = H.ui.UI.createDefault(hMap, defaultLayers);

    //Fix clicks toggle whole map to rerender
    earthquakes.forEach(earthquake => {
      const [lng, lat, rad] = earthquake.geometry.coordinates;
      const circle = getCircle(lat, lng, rad * 1000, earthquake.selected)
      circle.addEventListener('tap', () => toggleSelected(earthquake.id))
      hMap.addObject(circle)
    })

    return () => {
      hMap.dispose();
    };
  }, [mapRef, earthquakes]);

  return <div className="map" ref={mapRef} />;
};

export default HereMap;
