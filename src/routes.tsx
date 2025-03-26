
import { createBrowserRouter } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ClarifaiContent from "./pages/ClarifaiContent";
import ClarifaiApp from "./pages/ClarifaiApp";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
  },
  {
    path: "/clarifai",
    element: <ClarifaiContent />,
  },
  {
    path: "/clarifai-app",
    element: <ClarifaiApp />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
