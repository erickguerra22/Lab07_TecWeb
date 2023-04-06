import React, { useState, useEffect } from 'react'

import './ListElement.css'

const ListElement = ({ text, iconName, imgSize, link }) => {
  if (link != undefined) {
    return (
      <li className="element">
        <img src={`/src/assets/${iconName}.svg`} style={{
          height: `${imgSize}`,
          width: `${imgSize}`,
          marginRight: "5px"
        }} />
        <a href={link} target="_blank">{text}</a>
      </li >
    )
  }
  return (
    <li className="element">
      <img src={`/src/assets/${iconName}.svg`} style={{
        height: `${imgSize}`,
        width: `${imgSize}`,
        marginRight: "5px"
      }} />
      {text}
    </li >
  )
}

export { ListElement }