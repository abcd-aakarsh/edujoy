import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LearnPage from "./pages/LearnPage";
import AppLayout from "./ui/AppLayout";
import WorkshopPage from "./pages/WorkshopPage";
import Science from "./components/Science/Science";
import Maths from "./components/Maths/Maths";
import Engineering from "./components/Engineering/Engineering";
import Computer from "./components/Computer/Computer";
import ScienceSubtopics from "./components/Science/ScienceSubtopics";
import ScienceQuiz from "./components/Science/ScienceQuiz";
import EngineeringSubtopics from "./components/Engineering/EngineeringSubtopics";
import EngineeringQuiz from "./components/Engineering/EngineeringQuiz";
import ComputerSubtopics from "./components/Computer/ComputerSubtopics";
import ComputerQuiz from "./components/Computer/ComputerQuiz";
import MathsSubtopics from "./components/Maths/MathsSubtopics";
import MathsQuiz from "./components/Maths/MathsQuiz";
const App = () => {
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      errorElement: <div>Coming Soon...</div>,
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
        {
          path: "/learn/engineering/:subjectId",
          element: <EngineeringSubtopics />,
        },
        {
          path: "/learn/engineering/:subjectId/quiz/:subtopicId",
          element: <EngineeringQuiz />,
        },
        { path: "/learn/computer/:subjectId", element: <ComputerSubtopics /> },
        {
          path: "/learn/computer/:subjectId/quiz/:subtopicId",
          element: <ComputerQuiz />,
        },
        { path: "/learn/maths/:subjectId", element: <MathsSubtopics /> },
        {
          path: "/learn/maths/:subjectId/quiz/:subtopicId",
          element: <MathsQuiz />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
