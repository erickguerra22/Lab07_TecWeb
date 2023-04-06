import React from 'react'
import PropTypes from 'prop-types'
import './Card.css'

const Card = ({
  image, title, text, link, linkText,
}) => (
  <div className="card">
    <img alt="text" src={image} />
    <h2>{title}</h2>
    <p>
      {text}
      <a rel="noreferrer" href={link} target="_blank">{linkText}</a>
    </p>
  </div>
)

Card.propTypes = {
  image: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  linkText: PropTypes.string.isRequired,
}

export default Card
