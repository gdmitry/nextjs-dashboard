import { fetchRevenue } from "../lib/data";

export default async function Page() {
  const revenue = await fetchRevenue();

  return <p>Dashboard Page</p>;
}