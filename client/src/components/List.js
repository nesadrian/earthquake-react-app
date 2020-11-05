import React from 'react'
import Card from './Card';
import './List.css'

const List = ({ earthquakes, toggleSelected, s }) => {
  console.log("fmjsfmdis");

  return (
    <section className="list" key={s}>
      {earthquakes.map(earthquake => <Card key={earthquake.id} earthquake={earthquake} toggleSelected={toggleSelected} />)}
    </section>
  )
}

export default List;
