export default function TarifSkeleton() {
  // Fetch data and type it

  return (
    <div
      role="status"
      className="grid grid-cols-3 gap-3.5 w-full animate-pulse"
    >
      <div className="col-span-3 h-[190px] relative overflow-hidden flex flex-col items-center px-[18px] pb-[23px]  bg-[#313637] rounded-4xl border-2 border-[#484D4E] cursor-pointer"></div>
      <div className="relative h-[300px] overflow-hidden flex flex-col items-center px-[18px] pb-[23px]  bg-[#313637] rounded-4xl border-2 border-[#484D4E] cursor-pointer"></div>
      <div className="relative h-[300px] overflow-hidden flex flex-col items-center px-[18px] pb-[23px]  bg-[#313637] rounded-4xl border-2 border-[#484D4E] cursor-pointer"></div>
      <div className="relative h-[300px] overflow-hidden flex flex-col items-center px-[18px] pb-[23px]  bg-[#313637] rounded-4xl border-2 border-[#484D4E] cursor-pointer"></div>
    </div>
  );
}
