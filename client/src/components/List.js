import { grey } from '@material-ui/core/colors';
import React, { useState } from 'react'
import Card from './Card';
import { Button } from '@material-ui/core'
import './List.css'

const List = ({ earthquakes, toggleSelected, s, map }) => {
  const [limit, setLimit] = useState(5)

  return (
    <section>
      <section className="list" key={s}>
        {earthquakes.slice(0, limit).map(earthquake => <Card key={earthquake.id} earthquake={earthquake} toggleSelected={toggleSelected} map={map} />)}
      </section>
      <section className="button-container">
        <Button className="button-container" onClick={() => setLimit(limit + 5)}>Show more</Button>
      </section>
    </section>
  )
}

export default List;
