import Image from "next/image";
import SmallFooter from "./components/SmallFooter";
import TarifContent from "./TarifContent/TarifContent";

export default function Home() {
  return (
    <section className="w-full max-w-[1216px] mx-auto">
      <h1 className="font-bold text-[40px] mb-24 mt-12">
        Выбери подходящий для себя <span className="text-[#FDB056]">тариф</span>
      </h1>
      <TarifContent />
      <SmallFooter />
    </section>
  );
}
