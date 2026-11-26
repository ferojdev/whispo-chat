import React from 'react'
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
    RouterProvider,

} from "react-router-dom";
import Registration from './pages/Registration';
import Login from './pages/Login';
import Home from './pages/Home';
import Messege from './pages/Messege';
import Notification from './pages/Notification';
import Settings from './pages/Settings';
import Layout from './components/Layout';

const router = createBrowserRouter(
  createRoutesFromElements(
<>
    <Route path="/"element={<Registration />}></Route>
    <Route path="/login"element={<Login />}></Route>
    <Route path="/"element={<Layout/>}>
    
    <Route path="home"element={<Home />}></Route>
    <Route path="message"element={<Messege/>}></Route>
    <Route path="notification"element={<Notification />}></Route>
    <Route path="settings"element={<Settings />}></Route>
    
    </Route>

</>
  )
);


const App = () => {
  return (
        <RouterProvider router={router} />

  )
}

export default App