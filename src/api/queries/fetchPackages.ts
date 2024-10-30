export async function fetchPackages(term: string): Promise<Package[]> {
  try {
    const res = await fetch(
      `https://registry.npmjs.org/-/v1/search?text=${term}`
    );
    const data: PackageSearchResult = await res.json();
    return data.objects;
  } catch {
    throw new Error(
      `Error fetching data from https://registry.npmjs.org/-/v1/search?text=${term}`
    );
  }
}
