import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import About from './pages/About';
import Order from './pages/Order';
import Feedback from './pages/Feedback';

const routers = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/order",
    element: <Order/>
  },
  {
    path: "/about",
    element: <About/>
  },
  {
    path: "/feedback",
    element: <Feedback/>
  }
])

function App() {
  return (
    <div>
      <RouterProvider router={routers}/>
    </div>
  )
}

export default App
