import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import {ErrorPage} from '../components/ErrorElement.jsx'
const Front = lazy(() =>
  import("../pages/Front").then((module) => ({ default: module.Front }))
);
const Home = lazy(() =>
  import("../pages/Home").then((module) => ({ default: module.Home }))
);
const AppLayout = lazy(() =>
  import("./AppLayout").then((module) => ({ default: module.AppLayout }))
);
const Education = lazy(() =>
  import("../pages/Education").then((module) => ({ default: module.Education }))
);
const Skills = lazy(() =>
  import("../pages/Skills").then((module) => ({ default: module.Skills }))
);
const Project = lazy(() =>
  import("../pages/Project").then((module) => ({ default: module.Project }))
);
const Contact = lazy(() =>
  import("../pages/Contact").then((module) => ({ default: module.Contact }))
);

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Front />,
  },
  {
    path: "/manjeet",
    element: <AppLayout />,
    errorElement:<ErrorPage/>,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "education",
        element: <Education />,
      },
      {
        path: "skills",
        element: <Skills />,
      },
      {
        path: "projects",
        element: <Project />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);
