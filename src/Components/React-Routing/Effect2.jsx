import React from 'react'
import Routes from './Routes'
import { useEffect, useState } from 'react'

export default function Effect2() {
  const [quotes, setQuotes] = useState(null);

  useEffect(() => {
    fetch("https://dummyjson.com/quotes")
    .then(response => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error))
  }, [])
  return (
    <>
         <h2>This is Effect2 Component !</h2>
         <p>Use Effect Hooks in API Fetching</p>
         <Routes />
    </>
  )
}
