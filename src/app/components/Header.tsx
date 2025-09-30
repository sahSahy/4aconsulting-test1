"use client";
import Countdown, { CountdownRenderProps } from "react-countdown";
import { useDispatch, useSelector } from "react-redux";
import { setSaleEnded } from "../store/globalSlice";
export default function Header() {
  const dispatch = useDispatch();
  const renderer = ({ minutes, seconds, completed }: CountdownRenderProps) => {
    const min = String(minutes).padStart(2, "0");
    const sec = String(seconds).padStart(2, "0");

    return (
      <h4
        className={`text-5xl ${
          seconds <= 30 && minutes == 0 ? "text-red-400" : ""
        }`}
      >
        {min}:{sec}
      </h4>
    );
  };

  return (
    <div className="text-center flex flex-col text-2xl bg-[#1D5B43] py-2">
      <h3 className="text-2xl">Успейте открыть пробную неделю</h3>

      <Countdown
        date={Date.now() + 1000 * 60 * 2}
        renderer={renderer}
        onComplete={() => dispatch(setSaleEnded(true))}
      />
    </div>
  );
}
