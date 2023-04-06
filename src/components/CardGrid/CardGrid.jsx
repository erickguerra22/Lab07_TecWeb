import React from 'react'
import './CardGrid.css'
import Card from '../Card/Card'

const CardGrid = () => (
  <div className="grid">
    <Card
      image="https://duckduckgo.com/assets/add-to-browser/cppm/laptop.svg"
      title="Privacidad para Chrome"
      text="Navega como siempre y nosotros nos encargamos del resto. Te ofrecemos buscador, bloqueador de rastreadores y mejora de encriptación todo en una"
      link="https://duckduckgo.com/app"
      linkText="extensión de Chrome."
    />
    <Card
      image="https://duckduckgo.com/assets/home/landing/icons/search.svg"
      title="Motor de Búsqueda Privada"
      text="Busca de forma privada con nuestra app o extensión, añade búsqueda web privada a tu navegador preferido o busca en"
      link="https://duckduckgo.com/"
      linkText="duckduckgo.com."
    />
    <Card
      image="https://duckduckgo.com/assets/add-to-browser/cppm/mobile.svg"
      title="Navegador Privado"
      text="Nuestro navegador privado para móviles viene equipado con nuestro motor de búsqueda, bloqueador de rastreadores, mejora de encriptación y más. Disponible para"
      link="https://duckduckgo.com/app"
      linkText="iOS y Android."
    />
  </div>
)

export default CardGrid
