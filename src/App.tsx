import {
  createBrowserRouter,
  LoaderFunctionArgs,
  RouterProvider,
} from "react-router-dom";
import Root from "./components/Root";
import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";
import DetailsPage from "./pages/DetailsPage";

interface PackageSearchResult {
  objects: Package[];
  time: string;
  total: number;
}

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
        loader: async ({
          request,
        }: LoaderFunctionArgs<Request>): Promise<Package[]> => {
          const { searchParams } = new URL(request.url);
          const term = searchParams.get("term");
          if (!term) {
            throw new Error("Search parameters must be provided.");
          }
          const res = await fetch(
            `https://registry.npmjs.org/-/v1/search?text=${term}`
          );
          const data: PackageSearchResult = await res.json();
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

function App() {
  return <RouterProvider router={router} />;
}

export default App;
