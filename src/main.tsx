import ReactDOM from "react-dom/client";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { store, persistor } from "app/store";
import { Toaster } from "sonner";
import Dashboard from "features/dashboard/Dashboard";
import Profile from "features/profile/Profile";
import EditProfileForm from "legacy/profile/EditProfileForm.tsx";
import Login from "features/auth/Login";
import Register from "features/auth/Register";
import EditSkills from "legacy/profile/EditSkils.tsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

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
    path: "/profile/edit/:id",
    element: <EditProfileForm />,
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
    path: "/profile/edit/skills/:id",
    element: <EditSkills />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Toaster richColors position="top-center" />
      <RouterProvider router={router} />
    </PersistGate>
  </Provider>
);
