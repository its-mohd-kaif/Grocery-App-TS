import Card from "./Components/Card";
import Navbar from "./Components/Navbar";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  createRoutesFromElements,
  Outlet,
} from "react-router-dom";
import Signin from "./Components/Signin";
import Signup from "./Components/Signup";
import Cart from "./Components/Cart";
import { createContext, useState } from "react";
// import { OutgoingMessage } from "http";

export const noteContext = createContext({});
function App() {
  const AppLayout = () => (
    <>
      <Navbar />
      <Outlet />
    </>
  );

  let router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Card />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/cart" element={<Cart />} />
        </Route>
      </>
    )
  );
  const [data, setData] = useState([]);
  return (
    <div>
      <noteContext.Provider value={{ data, setData }}>
        <RouterProvider router={router} />
      </noteContext.Provider>
    </div>
  );
}

export default App;
