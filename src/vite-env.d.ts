/// <reference types="vite/client" />
import {
  PackageSummary as PackageSummaryImport,
  Package as PackageImport,
  PackageSearchResult as PackageSearchResultImport,
} from "./api/type/PackageTypes";

declare global {
  type PackageSummary = PackageSummaryImport;
  type Package = PackageImport;
  type PackageSearchResult = PackageSearchResultImport;
}

export {};
