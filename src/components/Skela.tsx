import React from 'react'
import "./index.css"

export interface PropsType {
  /** 'Line' is the default skeleton type */
  type?: string,
  width?: string,
  height?: string,
  borderRadius?: string,
  color?: string,
  /** animation default is true*/
  animation?: boolean,
  animationType?: "wave" | "pulse",
  className?: string,
  style?: React.CSSProperties
}

/**ReactSkela is a skeleton library used to animated placeholder that simulates the layout of a website while data is being loaded.*/
export const Skela = ({
  type="line",
  width="",
  height="",
  borderRadius="",
  color="",
  animation=true,
  animationType="wave",
  className="",
  style={}
}: PropsType) => {
  const classes = `skeleton ${type.toLocaleLowerCase()} ${className} ${animation ? animationType.toLocaleLowerCase()  : ""}`;

  return (
    <div className='skeleton-wrapper'>
      <div 
        className={classes}
        style={{
          width: width ? width : "",
          height: height ? height : "",
          borderRadius: borderRadius ? borderRadius : "",
          backgroundColor: color ? color : "#dddddd",
          ...style
        }}
      >
      </div>
    </div>
  )
}