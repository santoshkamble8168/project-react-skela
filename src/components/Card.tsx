import React from 'react'
import ReactSkela from './ReactSkela'

/**List is configurable with the ReactSkela (use ReactSkela propeties in to ReactSkelaTable) */
export const Card = ({
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
              <ReactSkela type='square' width={squareWidth} height={squareHeight} {...rest} />
            </div>
            <div className='title'>
              {title && <ReactSkela width={titleWidth} height={titleHeight} {...rest} />}
            </div>
            <div className='sub-title'>
              {subTitle && <ReactSkela width={subTitleWidth} height={subTitleHeight} {...rest} />}
            </div>
          </div>
        </>)
      })}
    </div>
  </>
  )
}