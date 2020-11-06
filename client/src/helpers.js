const dateToISO = date => date.toISOString().split('T', 1)[0];

const getCircle = (lat, lng, rad, selected) =>
  new window.H.map.Circle(
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

const moveMap = (map, lat, lng, zoom) => {
  map.setCenter({ lat, lng });
  map.setZoom(zoom);
}

export { dateToISO, getCircle, moveMap };
