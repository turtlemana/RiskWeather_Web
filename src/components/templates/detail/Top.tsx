import { useState } from "react";
import Image from "next/image";

import { COLORS } from "datas/main";
import { IMAGES } from "datas/weather";
import { WEEKLY } from "datas/detail";
import { Card } from "types/main";
import arrow from "assets/icons/detail/arrow.svg";

const Top = ({ coin }: { coin: Card }) => {
  const {
    image,
    name,
    subName,
    risk,
    price,
    maximumLoss,
    weatherIcon,
    weather,
    date,
  } = coin;
  const [isActiveWeeklyModal, setIsActiveWeeklyModal] = useState(false);
  const [index, setIndex] = useState(0);

  return (
    <main className="max-w-1320 mx-auto p-8 rounded-20 bg-white">
      <header className="flex">
        <section className="flex-1">
          <article className="flex gap-3 items-center mb-9">
            <Image src={image || ""} alt="" className="w-[60px]" />
            <div className="mr-7">
              <h5 className="font-bold text-[28px] h-[32px] mb-1">{name}</h5>
              <p className="text-gray-500">{subName}</p>
            </div>
            <div
              className={`py-[6px] px-4 rounded-20 text-center ${COLORS[risk]}`}
            >
              <h6 className="h-5">{risk}</h6>
            </div>
          </article>
          <article className="flex items-center gap-6">
            <p className=" text-gray-500">Price</p>
            <h6 className="text-4xl">{price?.toLocaleString()}</h6>
            <p className="text-gray-500">2.99%</p>
            <div className="w-px h-[20px] bg-gray-300 mx-1 mb-1" />
            <p className="text-gray-500">Maximum loss</p>
            <h6 className="text-4xl text-[#DF1525]">-{maximumLoss}%</h6>
          </article>
        </section>
        <section>
          <article className="flex items-center gap-5 mb-4 relative">
            <p className="text-[14px] text-gray-500 h-4">{date}</p>
            <div
              className={
                "flex py-2 px-2.5 rounded-20 bg-[#E6F5FF] cursor-pointer hover:bg-[#CCEAFF] min-w-[120px]"
              }
              onClick={() => setIsActiveWeeklyModal((prev) => !prev)}
            >
              <h6 className="text-xs text-[#0198FF] h-3 mr-1 min-w-[85px]">
                Weekly Forecast
              </h6>
              <Image src={arrow} alt="" />
            </div>
            {isActiveWeeklyModal && (
              <div className="z-30 absolute p-6 bg-white shadow-[0_0_12px_0_rgba(121,120,132,0.15)] top-8 right-0 rounded-20 border border-gray-100">
                <h6 className="mb-7">Weekly Forecast</h6>
                {WEEKLY.map(({ id, date, image }) => (
                  <div className="flex items-center w-[221px] mb-3" key={id}>
                    <p className="flex-1 mt-1 text-sm">{date}</p>
                    <Image src={image} alt="" className="w-9" />
                  </div>
                ))}
                <div className="mt-7 text-gray-500 bg-gray-50 rounded-20 py-3 px-4 text-sm">
                  Long-term forcasting may be less accurate
                </div>
              </div>
            )}
          </article>
          <article className="text-center flex flex-col items-center">
            <Image src={IMAGES[weatherIcon]} alt="" className="w-20 mb-1" />
            <h6 className="text-sm text-gray-700">{weather}</h6>
          </article>
        </section>
      </header>
      <section className="mt-[19px] bg-gray-50 px-6 py-5">
        <article className="flex items-center gap-4">
          <h6 className="text-gray-400 mr-2">Daily Risk Index</h6>
          <div className="flex gap-1.5 mr-2">
            <div
              className={`py-1 px-2.5 rounded-20 cursor-pointer hover:bg-[#F3F4F6] ${
                index === 0
                  ? "bg-[#E6F5FF] text-[#0198FF]"
                  : "bg-whtie border text-gray-400 "
              }`}
              onClick={() => setIndex(0)}
            >
              <h6 className="text-xs h-3">0.99</h6>
            </div>
            <div
              className={`py-1 px-2.5 rounded-20 cursor-pointer hover:bg-[#F3F4F6] ${
                index === 1
                  ? "bg-[#E6F5FF] text-[#0198FF]"
                  : "bg-whtie border text-gray-400 "
              }`}
              onClick={() => setIndex(1)}
            >
              <h6 className="text-xs h-3">0.99</h6>
            </div>
          </div>
          <p className="text-gray-400 ">Tail Risk</p>
          <h6 className="text-[#111111] text-xl w-full max-w-[100px]">
            0.0004
          </h6>
          <div className="w-px h-4 bg-gray-300 mb-1 mx-1" />
          <p className="text-gray-400">VAR</p>
          <h6 className="text-[#111111] text-xl w-full max-w-[100px]">
            0.0699
          </h6>
          <div className="w-px h-4 bg-gray-300 mb-1 mx-1" />
          <p className="text-gray-400">CVAR</p>
          <h6 className="text-[#111111] text-xl w-full max-w-[100px]">
            0.6910
          </h6>
        </article>
      </section>
    </main>
  );
};

export default Top;
