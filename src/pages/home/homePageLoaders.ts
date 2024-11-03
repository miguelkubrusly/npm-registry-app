import { fetchFeaturedPackages } from "../../api/queries/fetchFeaturedPackages";

declare global {
  interface HomeLoaderResult {
    featuredPackages: PackageInfoSummary[];
  }
}

export async function homeLoader(): Promise<HomeLoaderResult> {
  const featuredPackages = await fetchFeaturedPackages();
  return { featuredPackages };
}
