import React from 'react'
import PropTypes from 'prop-types'
import './ListElement.css'

const ListElement = ({
  text, iconName, imgSize, link,
}) => {
  if (link !== undefined) {
    return (
      <li className="element">
        <img
          alt={iconName}
          src={`/src/assets/${iconName}.svg`}
          style={{
            height: `${imgSize}`,
            width: `${imgSize}`,
            marginRight: '5px',
          }}
        />
        <a rel="noreferrer" href={link} target="_blank">{text}</a>
      </li>
    )
  }
  return (
    <li className="element">
      <img
        alt={iconName}
        src={`/src/assets/${iconName}.svg`}
        style={{
          height: `${imgSize}`,
          width: `${imgSize}`,
          marginRight: '5px',
        }}
      />
      {text}
    </li>
  )
}

ListElement.propTypes = {
  iconName: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  imgSize: PropTypes.string.isRequired,
  link: PropTypes.string,
}

ListElement.defaultProps = { link: undefined }

export default ListElement
