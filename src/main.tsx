import ReactDOM from "react-dom/client";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { store, persistor } from "app/store";
import { Toaster } from "sonner";
import Dashboard from "features/dashboard/Dashboard";
import Profile from "features/profile/Profile";
import Login from "features/auth/Login";
import Register from "features/auth/Register";
import "typeface-inter";
import "./main.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Catalogue from "features/catalogue/Catalogue";

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

const router = createBrowserRouter([
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/profile/:id",
    element: <Profile />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/catalogue",
    element: <Catalogue />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ThemeProvider theme={theme}>
        <Toaster richColors position="top-center" />
        <RouterProvider router={router} />
      </ThemeProvider>
    </PersistGate>
  </Provider>
);
