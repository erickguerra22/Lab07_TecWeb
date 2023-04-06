/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react'

import './Header.css'
import DropdownMenu from '../DropdownMenu/DropdonMenu'

const Header = () => {
  const [dropDownHidden, setDDHidden] = useState(true)

  return (
    <div className="header">
      <div className="socialMedia">
        <div className="icon" onClick={() => setDDHidden((old) => !old)}>
          <div>H</div>
          <div style={{ fontSize: '14px', paddingLeft: '4px' }}>v</div>
        </div>
        <DropdownMenu hidden={dropDownHidden} />
      </div>
      <div className="settings">
        ⇶
      </div>
    </div>
  )
}

export default Header
