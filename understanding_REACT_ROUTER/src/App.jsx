
import './App.css'
import Contact from './components/Contact'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import User from './components/user'
import { createBrowserRouter , RouterProvider } from 'react-router-dom'
function App()
{  
   const router = createBrowserRouter([
    {
      path:"/",
      element:<><Navbar/></>
    },
    {
      path:"/Home",
      element:<><Navbar/><Home/></>
    },
    {
      path:"/About",
      element:<><Navbar/><About/></>
    },
    {
      path:"/Contact",
      element:<><Navbar/><Contact/></>
    },
    {
      path:"/user/:username",
      element:<><Navbar/><User/></>

    }
   ])
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App;
