import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import About from './pages/About';
import Order from './pages/Order';
import Feedback from './pages/Feedback';
import Post from './pages/Posts';
import Weather from './pages/weather';
import Recipe from './pages/Recipe';

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
  },
  {
    path: "/posts",
    element: <Post/>
  },
  {
    path: "/weather",
    element: <Weather/>
  },
  {
    path: "/recipe",
    element: <Recipe/>
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
