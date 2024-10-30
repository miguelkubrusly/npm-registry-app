import { useLoaderData } from "react-router-dom";

function SearchPage() {
  const data = useLoaderData();
  console.log(data);
  return <div>SearchPage</div>;
}

export default SearchPage;
