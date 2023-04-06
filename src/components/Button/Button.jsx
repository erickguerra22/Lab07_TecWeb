import React, { useState, useEffect } from 'react'

import './Button.css'

const Button = ({color,text, fontSize, link}) =>{
    return (
        <a className="button"href={link} target="_blank" style={{background:`${color}`, fontSize:`${fontSize}`}}>{text}</a>
    )
}

export {Button}