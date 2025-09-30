"use client";
import { useSelector } from "react-redux";
import { Tarif } from "../types/Tarif";
import { RootState } from "../store/store";
export default function TarifCard({
  isXL = false,
  data,
}: {
  isXL?: boolean;
  data: Tarif;
}) {
  const saleEnded = useSelector((state: RootState) => state.sale.saleEnded);
  const discountPercent =
    ((data.full_price - data.price) / data.full_price) * 100;
  return (
    <article
      className={`${
        isXL ? "col-span-3 XL" : ""
      } relative overflow-hidden flex flex-col items-center px-[18px] pb-[23px]  bg-[#313637] rounded-4xl border-2 border-[#484D4E] hover:border-[#FDB056] hover:scale-105 transition-all cursor-pointer`}
    >
      {!saleEnded && (
        <span className="discount_badge">-{discountPercent.toFixed(0)}%</span>
      )}
      <div className="flex flex-col items-center">
        <h3 className="text-white text-[26px]">{data.period}</h3>
        <div className="mt-[28px] flex flex-col items-end">
          <h2
            className={`text-5xl text-white font-bold transition-all ${
              !saleEnded ? "scale-100" : "scale-110"
            }`}
          >
            {data.price} ₽
          </h2>{" "}
          <del
            className={`text-2xl text-[#919191] transition-all ${
              !saleEnded ? "opacity-100" : "opacity-0"
            }`}
          >
            {data.full_price} ₽
          </del>
        </div>
      </div>
      <p className="text-base font-normal mt-10 ">{data.text}</p>
    </article>
  );
}
