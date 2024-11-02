import { LoaderFunctionArgs } from "react-router-dom";
import { fetchPackageInfo } from "../../api/queries/fetchPackageInfo";

export async function detailsLoader({ params }: LoaderFunctionArgs) {
  const { name } = params;
  if (!name) {
    throw new Error("Please provide a package name to access its details.");
  }
  const details: PackageInfoSummary = await fetchPackageInfo(name);

  return { details };
}
