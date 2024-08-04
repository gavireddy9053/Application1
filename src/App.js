import Header from './components/Header'
import Body from './components/Body'
import { createBrowserRouter ,Outlet} from 'react-router-dom'
import Offers from './components/Offers'
import Help from './components/Help'
import Cart from './components/Cart'
import MenuItems from './components/MenuItems'
import '@fortawesome/fontawesome-free/css/all.min.css';

import { createContext } from 'react'

function App(){
    return <div>

    <Header />
  <Outlet />
    </div>
}
export let context = createContext()

let name = 'Linitha'
export default App
export let router = createBrowserRouter([
  {
    path:'/',
    element:<App />,
    children:[
      {
        path:'/',
        element:<context.Provider value={name}>
        <Body />

        </context.Provider>
      },
      {
        path:'/offers',
        element:<Offers />
      },
      {
        path:'/help',
        element:<Help />
      },
      {
        path:'/cart',
        element:<Cart />
      },
      {
        path:'/restaurants/:restId',
        element:<MenuItems />
      }
     
    ]

  }
])

