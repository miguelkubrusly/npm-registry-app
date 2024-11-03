const FEATURED_PACKAGES = ["react", "typescript", "esbuild", "vite"];

export async function fetchFeaturedPackages(): Promise<PackageInfoSummary[]> {
  const promises = FEATURED_PACKAGES.map(async (name) => {
    const res = await fetch(`https://registry.npmjs.org/${name}`);
    return res.json();
  });
  const data: PackageInfo[] = await Promise.all(promises);
  const dataSummary: PackageInfoSummary[] = data.map((pkg) => {
    return {
      name: pkg.name,
      description: pkg.description,
      readme: pkg.readme,
      author: pkg.author,
      maintainers: pkg.maintainers,
      license: pkg.license,
      repository: pkg.repository,
    };
  });
  return dataSummary;
}
