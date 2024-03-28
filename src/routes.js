import { createBrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import Users from "./pages/Users";
import Users from "./pages/newUser";
import UserEdit, { userLoader } from "./pages/UserEdit";
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
    path: "/users/:userId",
    element: <PrivateRoute><UserEdit/></PrivateRoute>,
    loader: userLoader,
  },
]);

export default router;
