/// <reference types="vite/client" />
import {
  PackageSummary as ImportedPackageSummary,
  Package as ImportedPackage,
  PackageSearchResult as ImportedPackageSearchResult,
} from "./api/type/PackageTypes";

declare global {
  type PackageSummary = ImportedPackageSummary;
  type Package = ImportedPackage;
  type PackageSearchResult = ImportedPackageSearchResult;
}

export {};
