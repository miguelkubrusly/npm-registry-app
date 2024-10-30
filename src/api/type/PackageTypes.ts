interface Links {
  npm: string;
  homepage: string;
  repository: string;
  bugs: string;
}
interface User {
  username: string;
  email: string;
}
export interface PackageSummary {
  name: string;
  version: string;
  description: string;
  keywords: string[];
  links: Links;
}
export interface Package extends PackageSummary {
  scope: string;
  date: string;
  publisher: User;
  maintainers: User[];
}
export interface PackageSearchResult {
  objects: Package[];
  time: string;
  total: number;
}
