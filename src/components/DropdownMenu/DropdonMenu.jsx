import React from 'react'
import PropTypes from 'prop-types'
import './DropdownMenu.css'
import ListElement from '../ListElement/ListElement'

const DropdownMenu = ({ hidden }) => (
  <ul
    className="menu"
    style={{
      contentVisibility: `${hidden ? 'hidden' : 'visible'}`,
      opacity: `${hidden ? 0 : 1}`,
    }}
  >
    <ListElement text="Twitter" iconName="twitter" imgSize="20px" link="https://twitter.com/duckduckgo" />
    <ListElement text="Reddit" iconName="reddit" imgSize="20px" link="https://reddit.com/r/duckduckgo" />
    <ListElement text="Blog" iconName="blog" imgSize="20px" link="https://spreadprivacy.com/" />
    <ListElement text="Newsletter" iconName="newsletter" link="https://duckduckgo.com/newsletter" />
  </ul>
)

DropdownMenu.propTypes = { hidden: PropTypes.bool.isRequired }

export default DropdownMenu
