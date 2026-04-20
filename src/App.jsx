
import './App.css'
import Home from './Components/Home'
import MainLayout from './Components/MainLayout'
import Navbar from './Components/Navbar'
import Pastes from './Components/Pastes'
import ViewPaste from './Components/ViewPaste'
import { store } from './store'
import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
function App() {
 
 const router=createBrowserRouter(
   [
    {
      path:'/',
      element:<MainLayout/>,
      children:[
        {
          path:'/',
          element:<Home/>
        },
        {
          path:'pastes',
          element:<Pastes/>
        },
        {
          path:'pastes/:id',
          element:<ViewPaste/>
        }
      ]
    }
    
   ]
 )
  return (
    <div>
     <RouterProvider router={router}/>
    </div>
  )
}

export default App
