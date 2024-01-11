import ReactDOM from "react-dom/client";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { store, persistor } from "app/store";
import { Toaster } from "sonner";
import Profile from "features/profile/Profile";
import Login from "features/auth/Login";
import Register from "features/auth/Register";
import LandingPage from "./features/landing-page";
import "typeface-inter";
import {
  createBrowserRouter,
  RouteObject,
  RouterProvider,
} from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Catalogue from "features/catalogue/catalogue-content";
import ForgotPassword from "features/auth/ForgotPassword";
import Layout from "layout/Layout";
import NotFound from "features/not-found/NotFound";
import "styles/index.css";
import HomePage from "features/home-page";
import NewPassword from "features/auth/NewPassword";
import RegisterSuccess from "features/auth/RegisterSuccess";

const theme = createTheme({
  palette: {
    primary: {
      main: "#007934",
    },
    secondary: {
      main: "#dc004e",
    },
  },
});

const routerConfig: RouteObject[] = [
  {
    path: "",
    element: <Layout />,
    children: [
      {
        path: "profile/:id",
        element: <Profile />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "catalogue",
        element: <Catalogue />,
      },
      {
        path: "catalogue/:seed",
        element: <Catalogue />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
      {
        path: "/forgot-password/",
        element: <ForgotPassword />,
      },
      {
        path: "/new-password/:token",
        element: <NewPassword />,
      },
      {
        path: "/home/",
        element: <HomePage />,
      },
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/successfully-confirm",
        element: <RegisterSuccess />,
      },
    ],
  },
];

const router = createBrowserRouter(routerConfig);

export default router;

ReactDOM.createRoot(document.getElementById("root")!).render(
  <>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={theme}>
          <Toaster richColors position="top-center" />
          <RouterProvider router={router} />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  </>
);
