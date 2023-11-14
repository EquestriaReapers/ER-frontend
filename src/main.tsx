import ReactDOM from "react-dom/client";

import { Provider } from "react-redux";
import store from "app/store";
import Dashboard from "features/dashboard/Dashboard";
import Profile from "features/profile/Profile";
import EditProfileForm from "legacy/profile/EditProfileForm.tsx";
import Login from "features/auth/Login";
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
    path: "/profile/edit/skills/:id",
    element: <EditSkills />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
