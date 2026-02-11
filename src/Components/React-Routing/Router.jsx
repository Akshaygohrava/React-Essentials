import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Home'
import Effect1 from './Effect1'
import Effect2 from './Effect2'
import Products from './Products'
import Recipes from './Recipes'
import Formhandling1 from './Formhandling1'
import Formhandling2 from './Formhandling2'
const router = createBrowserRouter ([
    {
        path: "/",
        element: <Home />
    },{
        path: "use-effect-1",
        element: <Effect1 />
    },{
        path: "use-effect-2",
        element: <Effect2 />
    },{
        path: "Products",
        element: <Products />
    },{
        path: "Recipes",
        element: <Recipes />
    },{
        path: "Formhandling1",
        element: <Formhandling1 />
    },{
        path: "Formhandling2",
        element: <Formhandling2 />
    }
])
const Router = () => {
    return (
        <>
          <h1>React Router</h1>
          <RouterProvider router={router} />
          
        </>
    )
}
export default Router