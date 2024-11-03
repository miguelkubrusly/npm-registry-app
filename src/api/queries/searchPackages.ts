import { makePackageSummary } from "../utils/makePackageSummary";

export async function searchPackages(term: string): Promise<PackageSummary[]> {
  try {
    const res = await fetch(
      `https://registry.npmjs.org/-/v1/search?text=${encodeURIComponent(term)}`
    );
    const data: PackageSearchResult = await res.json();
    const packagesSummaries = data.objects.map((object: ResultObject) =>
      makePackageSummary(object)
    );
    return packagesSummaries;
  } catch {
    throw new Error(
      `Error fetching data from https://registry.npmjs.org/-/v1/search?text=${encodeURIComponent(
        term
      )}`
    );
  }
}
