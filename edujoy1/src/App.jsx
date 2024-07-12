import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LearnPage from "./pages/LearnPage";
import AppLayout from "./ui/AppLayout";
import WorkshopPage from "./pages/WorkshopPage";

const App = () => {
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/learn",
          element: <LearnPage />,
        },
        {
          path: "/workshop",
          element: <WorkshopPage />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
