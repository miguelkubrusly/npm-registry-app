import { LoaderFunctionArgs } from "react-router-dom";
import { fetchPackages } from "../../api/queries/fetchPackages";

async function SearchLoader({
  request,
}: LoaderFunctionArgs<Request>): Promise<PackageSummary[]> {
  const { searchParams } = new URL(request.url);
  const term = searchParams.get("term");
  if (!term) {
    throw new Error("Search parameters must be provided.");
  }
  const packages: Package[] = await fetchPackages(term);
  const summary: PackageSummary[] = packages.map(
    ({ name, version, description, keywords, links }) => {
      return {
        name,
        version,
        description,
        keywords,
        links,
      };
    }
  );
  return summary;
}

export default SearchLoader;
