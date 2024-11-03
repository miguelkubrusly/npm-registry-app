import { LoaderFunctionArgs } from "react-router-dom";
import { fetchPackageInfo } from "../../api/queries/fetchPackageInfo";

export async function detailsLoader({ params }: LoaderFunctionArgs) {
  if (!params.name) {
    throw new Error("Please provide a package name to access its details.");
  }
  const pkgName = decodeURIComponent(params.name);
  const details: PackageInfoSummary = await fetchPackageInfo(pkgName);

  return { details };
}
