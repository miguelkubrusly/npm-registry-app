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
  const { name, description, readme, author, maintainers, license } = details;
  return (
    <div>
      <div>{name}</div>
    </div>
  );
}

export default DetailsPage;
