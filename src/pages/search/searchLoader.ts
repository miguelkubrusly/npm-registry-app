import { LoaderFunctionArgs } from "react-router-dom";
import { searchPackages } from "../../api/queries/searchPackages";

async function searchLoader({
  request,
}: LoaderFunctionArgs<Request>): SearchLoaderArg {
  const { searchParams } = new URL(request.url);
  const term = searchParams.get("term");
  if (!term) {
    throw new Error("Search parameters must be provided.");
  }
  const packages: PackageSummary[] = await searchPackages(term);
  return {
    searchResults: packages,
  };
}

export default searchLoader;
