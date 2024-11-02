import { useLoaderData } from "react-router-dom";
import { fetchPackageInfo } from "../../api/queries/fetchPackageInfo";
import { detailsLoader } from "./detailsLoader";

// interface DetailsPageProps {
//   packageName: string;
// }

interface DetailsLoaderData {
  details: PackageInfoSummary;
}

function DetailsPage() {
  const { details } = useLoaderData() as DetailsLoaderData;
  const { name, description, readme, author, license, repository } = details;
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold my-4">{name}</h1>
      <div>
        <h3 className="text-lg font-bold">Description</h3>
        <div className="p-3 bg-gray-200 rounded">{description}</div>
      </div>
      <div>
        <h3 className="text-lg font-bold">License</h3>
        <div className="p-3 bg-gray-200 rounded">{license}</div>
      </div>
      <div>
        <h3 className="text-lg font-bold">Author</h3>
        <div className="p-3 bg-gray-200 rounded">
          {author.name} / {author.email}
        </div>
      </div>
      <div>
        <h3 className="text-lg font-bold">Repository</h3>
        <div className="p-3 bg-gray-200 rounded">{repository.url}</div>
      </div>
      <div>
        <h3 className="text-lg font-bold">README.md</h3>
        <div className="p-3 bg-gray-200 rounded">{readme}</div>
      </div>
    </div>
  );
}

export default DetailsPage;
