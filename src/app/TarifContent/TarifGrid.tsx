import fetchApi from "../utils/api";
import TarifCard from "./TarifCard";
import { Tarif } from "../types/Tarif";

export default async function TarifGrid() {
  // Fetch data and type it
  const res: Tarif[] = await fetchApi();

  if (!res || res.length === 0) {
    return <p>No tariffs found.</p>;
  }

  return (
    <div className="grid grid-cols-3 gap-3.5">
      {res.reverse().map((el: Tarif, index: number) => (
        <TarifCard key={index} isXL={index == 0} data={el} />
      ))}
    </div>
  );
}
