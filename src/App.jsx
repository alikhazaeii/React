
import React, { useEffect, useState } from 'react'
import bg from './../public/bg.jpg'
export default function App() {
  const [data, setData] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      const url = 'https://fakestoreapi.com/products/';

      try {
        const response = await fetch(url);
        const result = await response.json();

        // console.log(result);
        setData(result)

      } catch (error) {
        console.error(error);
      }
    };
    fetchData()
    return (
      <div className='w-screen h-screen bg-[#141920] flex flex-wrap'>
        <img className='w-full h-full fixed top-0 left-0' src={bg} alt="" />
        {result && result.map(val => {
          console.log(result);
          
          <article className='w-8/12 h-[200px] bg-red-500 relative z-10' ></article>
        })}

      </div>
    )
  }, [])




}


