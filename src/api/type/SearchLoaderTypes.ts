declare global {
  type SearchLoaderArg = Promise<SearchLoaderResults>;
  interface SearchLoaderResults {
    searchResults: PackageSummary[];
  }
}

export {};
