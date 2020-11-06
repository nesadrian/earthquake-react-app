const dateToISO = date => date.toISOString().split('T', 1)[0];

const getDateNow = () => dateToISO(new Date());

const getDateWeekAgo = () => {
  let weekAgo = new Date()
  weekAgo.setDate(weekAgo.getDate() - 7)
  weekAgo = dateToISO(weekAgo);
  return weekAgo
}

const getCircle = (lat, lng, rad, selected) =>
  new window.H.map.Circle(
    { lat, lng },
    rad,
    selected ?
      {
        style: {
          lineWidth: 0,
          fillColor: 'rgba(255, 167, 66, 0.7)'
        }
      } :
      {
        style: {
          lineWidth: 0,
          fillColor: 'rgba(237, 132, 66, 0.7)'
        }
      }
  );

const moveMap = (map, lat, lng, zoom) => {
  map.setCenter({ lat, lng });
  map.setZoom(zoom);
}

export { dateToISO, getCircle, moveMap, getDateNow, getDateWeekAgo };
