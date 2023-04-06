import React from 'react'
import PropTypes from 'prop-types'

import './Button.css'

const Button = ({
  color, text, fontSize, link,
}) => (
  <a rel="noreferrer" className="button" href={link} target="_blank" style={{ background: `${color}`, fontSize: `${fontSize}` }}>{text}</a>
)

Button.propTypes = {
  color: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  fontSize: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
}

export default Button
