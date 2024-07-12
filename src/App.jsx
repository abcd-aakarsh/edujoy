import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LearnPage from "./pages/LearnPage";
import AppLayout from "./ui/AppLayout";
import WorkshopPage from "./pages/WorkshopPage";
import Science from "./components/Science";
import Maths from "./components/Maths";
import Engineering from "./components/Engineering";
import Computer from "./components/Computer";
import ScienceSubtopics from "./components/ScienceSubtopics";
import ScienceQuiz from "./components/ScienceQuiz";
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
        {
          path: "/learn/science",
          element: <Science />,
        },
        {
          path: "/learn/maths",
          element: <Maths />,
        },
        {
          path: "/learn/engineering",
          element: <Engineering />,
        },
        {
          path: "/learn/computer",
          element: <Computer />,
        },
        { path: "/learn/science/:subjectId", element: <ScienceSubtopics /> },
        {
          path: "/learn/science/:subjectId/quiz/:subtopicId",
          element: <ScienceQuiz />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
