import React from 'react'
import '../header/header.css'
import Logo from '../../../../public/react.png'
export default function Header() {
  return (
      <header>
        <Img/>
        <Hello/>
      </header>
  )
}

function Img(){
  return (
    <figure>
      <img src={Logo} alt="" />
    </figure>
  )
}
function Hello(){
  return(
    <>
    <h1>Hello World</h1>
    <h2>Ali khazaei</h2>
    </>
    
  )
}