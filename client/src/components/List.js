import React from 'react'
import Card from './Card';

const List = ({ earthquakes }) => {
  return (
    <div>
      {earthquakes.map(earthquake => <Card earthquake={earthquake} />)}
    </div>
  )
}

export default List;