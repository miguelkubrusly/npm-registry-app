declare global {
  interface PackageAuthor {
    name: string;
    email: string;
  }

  interface PackageInfoSummary {
    name: string;
    description: string;
    readme: string;
    author: PackageAuthor;
    maintainers: PackageAuthor[];
    license: string;
    repository: {
      type: string;
      url: string;
    };
  }

  interface PackageInfo extends PackageInfoSummary {
    distTags: {
      latest: string;
    };
    readmeFilename: string;
    time: {
      modified: string;
      created: string;
      [version: string]: string;
    };
    versions: {
      [version: string]: {};
    };
    _id: string;
    _rev: string;
  }
}

export {};
