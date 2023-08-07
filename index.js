import React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';
import ManageAccountsRoundedIcon from '@mui/icons-material/ManageAccountsRounded';
import ContactMailRoundedIcon from '@mui/icons-material/ContactMailRounded';
import Products from "./routes/Products";
import Home from "./routes/Home";
import Reports from "./routes/Reports";
import Team from "./routes/Team";
import Messages from "./routes/Messages";
import Support from "./routes/Support";
import Header from "./components/Header";
import About from "./routes/About";
import Service from "./routes/Service";
import Contact from "./routes/Contact";
import "./App.css";

const AppLayout = () => (
  <>
    <Header />
    <Outlet />
  </>
);

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
        icon: <HomeRoundedIcon />
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "reports",
        element: <Reports />,
      },
      {
        path: "messages",
        element: <Messages />,
      },
      {
        path: "contact",
        element: <Contact />,
        icon: <ContactMailRoundedIcon />
      },
      {
        path: "about",
        element: <About />,
        icon: <InfoRoundedIcon />
      },
      {
        path: "service",
        element: <Service />,
        icon: <ManageAccountsRoundedIcon />
      },
      {
        path: "team",
        element: <Team />,
      },
      {
        path: "support",
        element: <Support />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
