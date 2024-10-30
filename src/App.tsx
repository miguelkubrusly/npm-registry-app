import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/Root";
import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";
import DetailsPage from "./pages/DetailsPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: "/search",
          element: <SearchPage />,
          loader: async ({ request }) => {
            const { searchParams } = new URL(request.url);
            const term = searchParams.get("term");
            if (!term) {
              throw new Error("Search parameters must be provided.");
            }
            const res = await fetch(
              `https://registry.npmjs.org/-/v1/search?text=${term}`
            );
            const data = await res.json();
            return data.objects;
          },
        },
        {
          path: "/packages/:name",
          element: <DetailsPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;

//TODO add loader functions
//request object
//new URL object
// deal with invalid term
//TODO use loader on search page
