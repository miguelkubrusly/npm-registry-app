/// <reference types="vite/client" />
import {
  PackageSummary,
  Package,
  PackageSearchResult,
} from "./api/type/PackageTypes";

declare global {
  type PackageSummary = PackageSummary;
  type Package = Package;
  type PackageSearchResult = PackageSearchResult;
}

export {};
