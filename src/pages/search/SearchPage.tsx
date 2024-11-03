import { useLoaderData } from "react-router-dom";
import PackageListItem from "../../components/PackageListItem";

function SearchPage() {
  const packages = (useLoaderData() as SearchLoaderResults).searchResults;

  const renderedPackages = packages.map((pkg) => (
    <PackageListItem key={pkg.name} pkg={pkg} />
  ));

  return (
    <div className="min-h-screen px-4">
      <h1 className="text-2xl font-bold my-6">Search Results</h1>
      <div className="space-y-4 mt-4">{renderedPackages}</div>
    </div>
  );
}

export default SearchPage;
