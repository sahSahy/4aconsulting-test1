import Image from "next/image";
import Link from "next/link";
import TarifGrid from "./TarifGrid";
import { Suspense } from "react";
import TarifSkeleton from "./TarifSkeleton";

export default function TarifContent() {
  return (
    <div className="mt-28 mb-16 flex justify-between">
      <Image
        src={"/freepik-export.png"}
        alt="jacked-body"
        width={380}
        height={767}
        className="mt-14 max-w-[380px] max-h-[767px]"
      />

      <div className="w-full max-w-[748px] ">
        <Suspense fallback={<TarifSkeleton />}>
          <TarifGrid />
        </Suspense>

        <div className="mt-5 px-5 py-4 flex max-w-[490px] bg-[#2D3233] rounded-3xl text-base leading-[1.3]">
          <Image
            alt="alert"
            src={"/alert1.png"}
            width={24}
            height={26}
            className="h-[26px] w-[24px]"
          />
          <p className="font-normal text-white">
            Следуя плану на 3 месяца и более, люди получают в 2 раза лучший
            результат, чем за 1 месяц
          </p>
        </div>

        <div className="flex items-center mt-7 mb-4">
          <input type="checkbox" className="w-8 h-8 cursor-pointer" />
          <p className="text-[#CDCDCD] font-normal text-base max-w-[550px] ml-3  ">
            Я согласен <Link href={"#"}>с офертой рекуррентных платежей</Link> и
            <Link href={"#"}> Политикой конфиденциальности</Link>
          </p>
        </div>

        <button
          type="submit"
          className="py-5 w-[352px] text-[#191E1F] bg-[#FDB056] rounded-3xl font-bold text-xl"
        >
          Купить
        </button>
        <p className="mt-3.5 leading-[1.2] text-[#9B9B9B] text-sm font-normal">
          Нажимая кнопку «Купить», Пользователь соглашается на разовое списание
          денежных средств для получения пожизненного доступа к приложению.
          Пользователь соглашается, что данные кредитной/дебетовой карты будут
          сохранены для осуществления покупок дополнительных услуг сервиса в
          случае желания пользователя.
        </p>
      </div>
    </div>
  );
}
