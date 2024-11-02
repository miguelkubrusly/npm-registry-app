declare global {
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
  interface PackageSummary {
    name: string;
    version: string;
    description: string;
    keywords?: string[];
    links: Links;
  }
  interface Package extends PackageSummary {
    scope: string;
    date: string;
    publisher: User;
    maintainers: User[];
  }

  interface ResultObject {
    package: Package;
  }

  interface PackageSearchResult {
    objects: ResultObject[];
    time: string;
    total: number;
  }
}
export {};
