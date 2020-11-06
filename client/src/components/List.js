import { grey } from '@material-ui/core/colors';
import React, { useState } from 'react'
import Card from './Card';
import { Button } from '@material-ui/core'
import './List.css'

const List = ({ earthquakes, toggleSelected, s, map }) => {
  const [limit, setLimit] = useState(10)

  console.log(earthquakes);
  return (
    <section>
      <section className="list" key={s}>
        {earthquakes ? earthquakes.slice(0, limit).map(earthquake => <Card key={earthquake.id} earthquake={earthquake} toggleSelected={toggleSelected} map={map} />)
          : <h1>Loading...</h1>
        }
      </section>
      <section className="button-container">
        <Button className="button-container" onClick={() => setLimit(limit + 10)}>Show more</Button>
      </section>
    </section>
  )
}

export default List;
