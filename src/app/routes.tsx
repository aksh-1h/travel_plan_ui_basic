import { createBrowserRouter } from "react-router";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import AIPlanner from "./pages/AIPlanner";
import Itinerary from "./pages/Itinerary";
import Dashboard from "./pages/Dashboard";
import Auth from "./pages/Auth";
import Layout from "./components/Layout";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "explore", Component: Explore },
      { path: "ai-planner", Component: AIPlanner },
      { path: "itinerary/:id?", Component: Itinerary },
      { path: "dashboard", Component: Dashboard },
    ],
  },
  {
    path: "/auth",
    Component: Auth,
  },
]);
