import React from 'react'
import Header from './components/Header/Header'
import './App.css'
import Logo from './components/Logo/Logo'
import SearchForm from './components/SearchForm/SearchForm'
import ListElement from './components/ListElement/ListElement'
import Button from './components/Button/Button'
import CardGrid from './components/CardGrid/CardGrid'

const App = () => (
  <div className="app">
    <Header />
    <Logo />
    <SearchForm />
    <h1>¿Cansado de que te rastreen? Podemos ayudarte.</h1>
    <p>Consigue protección continua y gratuita para tu privacidad en el navegador con una descarga:</p>
    <ul className="checkList">
      <ListElement text="Búsqueda Privada" iconName="check" imgSize="17px" />
      <ListElement text="Bloqueo De Rastreadores" iconName="check" imgSize="17px" />
      <ListElement text="Encriptación De Sitios" iconName="check" imgSize="17px" />
    </ul>
    <Button color="#678FFF" text="Añadir DuckDuckGo a Chrome" fontSize="15px" link="https://chrome.google.com/webstore/detail/duckduckgo-privacy-essent/bkdgflcldnnnapblkhphbgpggdiikppg" />
    <p style={{ fontSize: '12px', fontFamily: 'ProximaNova' }}>¡Con la confianza de decenas de millones de personas en todo el mundo!</p>
    <p style={{
      fontFamily: 'ProximaNova_SemiBold', fontSize: '17px', marginTop: '42px', marginBottom: '20px',
    }}
    >
      Protección de la Privacidad para Cualquier Dispositivo
    </p>
    <CardGrid />
    <div className='footer'>
      <h1 style={{ color: 'white', fontSize: '45px' }}>
        No guardamos tu
        <br />
        información personal. Jamás.
      </h1>
      <p style={{
        color: 'white', marginTop: '30px', marginBottom: '0', lineHeight: '1.5em', fontSize: '20px',
      }}
      >
        Nuestra política de privacidad es simple: No colectamos
        <br />
        o compartimos ninguna información personal tuya.
      </p>
      <Button color="#713828" text="Instalar DuckDuckGo" fontSize="18px" link="https://chrome.google.com/webstore/detail/duckduckgo-privacy-essent/bkdgflcldnnnapblkhphbgpggdiikppg" />
      <img alt="DuckDuckGo Monster" src="https://duckduckgo.com/assets/onboarding/bathroomguy/1-monster-v2--pre-animation.svg" style={{ marginTop: '30px', width: '55%' }} />
    </div>
  </div>
)

export default App
