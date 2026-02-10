import React from 'react'
import { Link } from 'react-router-dom'
import Effect1 from './Effect1'
import Routes from './Routes'


export default function Home() {
  return (
    <>
       <h2>This is Home Component !</h2>
      <Routes />
       {/* <Link className='btn btn-primary' to={"/use-effect-1"}>Effect 1</Link>
       <Link className='btn btn-primary' to={"/use-effect-2"}>Effect 2</Link>
       <Link className='btn btn-primary' to={""}>Home</Link>
       <Link className='btn btn-primary' to={"/Products"}>Products</Link>
       <Link className='btn btn-primary' to={"/Recipes"}>Recipes</Link> */}
    </>
  )
}
