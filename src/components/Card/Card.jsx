import React, { useState, useEffect } from 'react'

import './Card.css'

const Card = ({image, title, text, link, linkText}) =>{
    return (
        <div className="card">
            <img src={image}></img>
            <h2>{title}</h2>
            <p>{text} <a href={link} target="_blank">{linkText}</a></p>
        </div>
    )
}

export {Card}