import { LoaderFunctionArgs } from "react-router-dom";
import { fetchPackages } from "../../api/queries/fetchPackages";

async function SearchLoader({
  request,
}: LoaderFunctionArgs<Request>): Promise<Package[]> {
  const { searchParams } = new URL(request.url);
  const term = searchParams.get("term");
  if (!term) {
    throw new Error("Search parameters must be provided.");
  }
  const packages = await fetchPackages(term);
  return packages;
}

export default SearchLoader;
