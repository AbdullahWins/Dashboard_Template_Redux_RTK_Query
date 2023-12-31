import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Analytics from "../pages/analytics/Analytics";
import Campaigns from "../pages/campaigns/Campaigns";
import AddUser from "../pages/forms/users/AddUser";
import Home from "../pages/home/Home";
import Inbox from "../pages/inbox/Inbox";
import Reports from "../pages/reports/Reports";
import Setting from "../pages/setting/Setting";
import Users from "../pages/users/Users";
import PrivateRouter from "./PrivateRouter";
import GirlFriends from "../pages/girlfriends/GirlFriends";
import AddGirlFriend from "../pages/forms/girlfriends/AddGirlFriend";
import UpdateGirlFriend from "../pages/forms/girlfriends/UpdateGirlFriend";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: (
      <PrivateRouter>
        <Layout></Layout>
      </PrivateRouter>
    ),
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/campaigns",
        element: <Campaigns></Campaigns>,
      },
      {
        path: "/reports",
        element: <Reports></Reports>,
      },
      {
        path: "/analytics",
        element: <Analytics></Analytics>,
      },
      {
        path: "/inbox",
        element: <Inbox></Inbox>,
      },
      {
        path: "/setting",
        element: <Setting></Setting>,
      },
      {
        path: "/users",
        element: <Users></Users>,
      },
      {
        path: "/girlfriends",
        element: <GirlFriends></GirlFriends>,
      },

      // forms
      {
        path: "/add-user",
        element: <AddUser></AddUser>,
      },
      // forms
      {
        path: "/addgirlfriend",
        element: <AddGirlFriend></AddGirlFriend>,
      },
      // forms
      {
        path: "/updategirlfriend",
        element: <UpdateGirlFriend></UpdateGirlFriend>,
      },
    ],
  },

  {
    path: "*",
    element: (
      <h2 className="font-black py-6 text-3xl text-red-600 text-center">
        Page Not Found!
      </h2>
    ),
  },
]);
