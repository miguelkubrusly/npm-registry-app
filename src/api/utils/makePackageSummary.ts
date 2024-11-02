export const makePackageSummary = (object: ResultObject): PackageSummary => {
  const keywordsNotNull = object.package.keywords || [];
  const { name, version, description, links } = object.package;

  return {
    name,
    version,
    description,
    keywords: keywordsNotNull,
    links,
  };
};
