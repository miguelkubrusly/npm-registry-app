import { useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";

function HomePage() {
  const { featuredPackages } = useLoaderData() as HomeLoaderResult;

  const renderedFeatPkgs = featuredPackages.map((featPkg) => {
    return (
      <div
        key={featPkg.name}
        className="flex flex-col justify-between gap-3 border rounded shadow p-4 max-w-xl mb-2"
      >
        <div className="flex flex-col gap-1 border-bottom border-gray-400">
          <div className="font-bold text-center">{featPkg.name}</div>
          <div className="text-sm text-gray-500">{featPkg.description}</div>
          <div className="text-sm text-gray-500">
            {featPkg.maintainers.length} Maintainers
          </div>

          <Link
            to={`/packages/${encodeURIComponent(featPkg.name)}`}
            className="border rounded border-gray-900 text-center"
          >
            View
          </Link>
        </div>
      </div>
    );
  });

  return (
    <div className="container py-12 space-y-8">
      <div className="space-y-6 text-center">
        <h1 className="text-6xl font-bold">The NPM Registry</h1>
        <p className="mx-auto max-w-[600px] text-gray-500">
          The package manager for Javascript. Search and view packages.
        </p>
      </div>
      <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-[900px] items-stretch">
        {renderedFeatPkgs}
      </div>
    </div>
  );
}

export default HomePage;
