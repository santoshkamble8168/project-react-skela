import React from 'react'
import {Skela} from './Skela'

/**List is configurable with the ReactSkela (use ReactSkela propeties in to ReactSkelaTable) */
export const SkelaCard = ({
  squareWidth = "250px",
  squareHeight = "250px",
  title = true,
  titleWidth = "50%",
  titleHeight = "16px",
  subTitle = true,
  subTitleWidth = "100%",
  subTitleHeight = "16px",
  cardClassName = "",
  cradCount = 1,
  cardGap = "10px",
  cardStyle = {},
  ...rest
}) => {

  return (<>
    <div className='card-container'>
      {Array(cradCount).fill(null).map((item, cIndex) => {
        return (<>
          <div
            key={cIndex}
            className='react-skela-card'
            style={{
              padding: cardGap,
              ...cardStyle
            }}
          >
            <div className='card'>
              <Skela type='square' width={squareWidth} height={squareHeight} {...rest} />
            </div>
            <div className='title'>
              {title && <Skela width={titleWidth} height={titleHeight} {...rest} />}
            </div>
            <div className='sub-title'>
              {subTitle && <Skela width={subTitleWidth} height={subTitleHeight} {...rest} />}
            </div>
          </div>
        </>)
      })}
    </div>
  </>
  )
}