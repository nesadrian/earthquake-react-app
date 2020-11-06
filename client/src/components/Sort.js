import React, { useState } from 'react'
import { ImportExport } from '@material-ui/icons'
import { getDateNow, getDateWeekAgo } from '../helpers'
import { Select, MenuItem, InputLabel, FormControl, TextField } from '@material-ui/core'
import './Sort.css'

const Sort = ({ sortOrder, sortOrderReverse, setDate }) => {
  const [asc, setAsc] = useState(false)

  const handleBtnClick = () => {
    setAsc(!asc);
    sortOrderReverse();
  }

  return (
    <section className="sort-container">
      <section className="sort_val-container">
        <FormControl className="sort">
          <InputLabel id="label">Sort</InputLabel>
          <Select onChange={e => sortOrder(e.target.value, asc)} className="select" labelId="label" id="select" defaultValue="">
            <MenuItem value="mag">Magnitude</MenuItem>
            <MenuItem value="tsunami">Tsunami</MenuItem>
            <MenuItem value="radius">Radius</MenuItem>
            <MenuItem value="time">Time</MenuItem>
          </Select>
        </FormControl>
        <ImportExport className={asc ? "sort_btn flipped" : "sort_btn"} onClick={handleBtnClick} />
      </section>
      <section className="sort_dates-container">
        <TextField
          id="from"
          label="From"
          type="date"
          defaultValue={getDateWeekAgo()}
          onChange={e => setDate(e.target.value, true)}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          id="to"
          label="To"
          type="date"
          defaultValue={getDateNow()}
          onChange={e => setDate(e.target.value, false)}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </section>
    </section>
  )
}

export default Sort;