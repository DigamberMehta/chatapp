import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/HomePage";
import CallHistory from "./components/home/CallHistory";
import LandingPage from "./pages/LandingPage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/call",
        element: <CallHistory />,
      },
      ,
      {
        path: "/landingPage",
        element: <LandingPage />,
      },
      {
        path: "/auth",
        element: <Login />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
