export async function fetchPackageInfo(
  packageName: string
): Promise<PackageInfoSummary> {
  try {
    const res = await fetch(`https://registry.npmjs.org/${packageName}`);
    const {
      name,
      description,
      readme,
      author,
      maintainers,
      license,
      repository,
    }: PackageInfo = await res.json();
    return {
      name,
      description,
      readme,
      author,
      maintainers,
      license,
      repository,
    };
  } catch {
    throw new Error(
      `Error fetching info for ${packageName} at https://registry.npmjs.org/${packageName}`
    );
  }
}
