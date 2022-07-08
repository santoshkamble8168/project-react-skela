import React from 'react'
import ReactSkela from './ReactSkela'

/**ReactSkelaTable is configurable with the ReactSkela (use ReactSkela propeties in to ReactSkelaTable) */
export const Table = ({
  cols = 0,
  rows = 10,
  tableWidth = "100%",
  rowGap = "10px",
  ...rest
}) => {

  return (
    <div className='react-skela-table' style={{ width: tableWidth }}>
      {Array(rows).fill(null).map((row, rIndex) => {
        return (
          <div className='__row' key={rIndex}>
            {
              cols ?
                Array(cols).fill(null).map((clo, cIndex) => {
                  return (<div className='__col' style={{ padding: rowGap }} key={cIndex}>
                    <ReactSkela height='20px' {...rest} /></div>)
                }) :
                (<div className='__col' style={{ paddingBottom: rowGap }}>
                  <ReactSkela height='20px' {...rest} /> </div>)
            }
          </div>
        )
      })}
    </div>
  )
}