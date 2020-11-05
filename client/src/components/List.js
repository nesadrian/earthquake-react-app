import React from 'react'
import Card from './Card';
import './List.css'

const List = ({ earthquakes }) => {
  return (
    <section className="list">
      {earthquakes.map(earthquake => <Card key={earthquake.id} earthquake={earthquake} />)}
    </section>
  )
}

export default List;
