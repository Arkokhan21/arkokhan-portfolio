import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from './Layout/Main';
import Home from './Components/Home/Home/Home';
import AllProjects from './Components/Home/Portfolio/AllProjects';
import { Toaster } from 'react-hot-toast';

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/allprojects',
          element: <AllProjects></AllProjects>
        }
      ]
    },
  ]);

  return (
    <div >
      <RouterProvider router={router} />
      <Toaster />
    </div>
  );
}

export default App;
