import React, { useState, useEffect } from 'react'

import './SearchForm.css'

const SearchForm = () => {
    return (
        <div className="form">
            <input className="input" placeholder="Busca en la red sin que te rastreen" />
            <input className="search" type="submit" value="S"/>
        </div>
    )
}

export { SearchForm }