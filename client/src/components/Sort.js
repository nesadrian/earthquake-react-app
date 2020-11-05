import React, { useState } from 'react'
import { ImportExport } from '@material-ui/icons'
import { Select, MenuItem, InputLabel, FormControl } from '@material-ui/core'
import './Sort.css'

const Sort = ({ sortOrder, sortOrderReverse }) => {
  const [asc, setAsc] = useState(false)

  const handleBtnClick = () => {
    setAsc(!asc);
    sortOrderReverse();
  }

  return (
    <section className="sort-container">
      <FormControl className="sort">
        <InputLabel id="label">Sort</InputLabel>
        <Select onChange={e => sortOrder(e.target.value, asc)} className="select" labelId="label" id="select">
          <MenuItem value="mag">Magnitude</MenuItem>
          <MenuItem value="tsunami">Tsunami</MenuItem>
          <MenuItem value="radius">Radius</MenuItem>
        </Select>
      </FormControl>
      <ImportExport className={asc ? "sort_btn flipped" : "sort_btn"} onClick={handleBtnClick} />
    </section>
  )
}

export default Sort;