import { createBrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import Users from "./pages/Users";
import NewUser from "./pages/NewUser";
import PrivateRoute from "./components/Auth/PrivateRoute";
import SignIn from "./pages/SignIn";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SignIn />,
  },
  {
    path: "/home",
    element: <PrivateRoute><Home/></PrivateRoute>,
  },
  {
    path: "/users",
    element: <PrivateRoute><Users/></PrivateRoute>,
  },
  {
    path: "/add-user",
    element: <PrivateRoute><NewUser/></PrivateRoute>,
  },
]);

export default router;
