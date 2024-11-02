import { useLoaderData } from "react-router-dom";
import PackageListItem from "../../components/PackageListItem";
import { searchPackages } from "../../api/queries/searchPackages";

function SearchPage() {
  const packages = (useLoaderData() as SearchLoaderResults).searchResults;

  const renderedPackages = packages.map((pkg) => {
    searchPackages(pkg.name);
    return <PackageListItem key={pkg.name} pkg={pkg} />;
  });

  return (
    <div>
      <h1 className="text-2xl font-bold my-6">Search Results</h1>
      <div className="space-y-4 mt-4">{renderedPackages}</div>
    </div>
  );
}

export default SearchPage;
