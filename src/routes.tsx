
import { createBrowserRouter } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ClarifaiContent from "./pages/ClarifaiContent";

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
    path: "*",
    element: <NotFound />,
  },
]);
