import Header from './header/Header'
import Body from './body/Body'
import { createBrowserRouter ,Outlet} from 'react-router-dom'
import Offers from './Offers'
import Help from './Help'
import Cart from './Cart'
import MenuItems from './MenuItems'
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

