import './App.css'
import { Basic } from './Components/Basics/Basic'
import Router from './Components/React-Routing/Router'
import Routers from './Components/React-Routing-2.0/Router2.0'
import Errorboundary from './Components/React-Error/Error-boundary'
import { ErrorBoundary } from 'react-error-boundary';

function ErrorMessage() {
    return (
        <>
             <h3>Something Went Wrong</h3>
        </>
    )
}


function App() {
  return (
    <>
      <h1>Official React Essentials Topics</h1>
      {/* <Basic></Basic> */}
      <hr />
      {/* <Router></Router> */}
      <hr />
      {/* <Routers /> */}
      <hr />
      <Errorboundary />

      
      {/* <p>Note this update of submodule of Full stack</p> */}
    </>
  )
}

export default App
