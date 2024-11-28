import React from 'react'
import '../body/body.css'
export const Body = () => {
  return (
    <body id='body'>
      <List/>  
    </body>
    
  )
}

function List() {
  return (
    <>
      <ul>
        <li>Home</li>
        <li>Contact</li>
        <li>about</li>
        <li>location</li>
      </ul>
      <article>
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro illo magni deleniti, consectetur nostrum vero.</h1>
      </article>
    </>
  )
}