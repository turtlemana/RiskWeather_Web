import { Dispatch, SetStateAction, useState } from "react";
import Image from "next/image";

import plus from "assets/icons/portfolio/plus.svg";
import arrow from "assets/icons/portfolio/arrow.svg";
import refresh from "assets/icons/portfolio/refresh.svg";
import pen from "assets/icons/portfolio/pen.svg";
import trash from "assets/icons/portfolio/trash.svg";
import { MENUS } from "datas/portfolio";

interface Props {
  setIsOpenAddModal: Dispatch<SetStateAction<boolean>>;
}

const Chart = ({ setIsOpenAddModal }: Props) => {
  const [index, setIndex] = useState(0);
  const [menuIndex, setMenuIndex] = useState(0);
  const firstIndex = menuIndex === 0;
  const lastIndex = (menuIndex + 1) * 4 >= MENUS.length;
  const handlePrev = () => menuIndex > 0 && setMenuIndex((prev) => prev - 1);
  const handleNext = () => {
    menuIndex * 4 < MENUS.length && setMenuIndex((prev) => prev + 1);
  };
  const { title, total, loss, coin } = MENUS[index];

  return (
    <main className="bg-white px-6 py-4 rounded-20 max-w-[650px] flex-1">
      <section className="relative flex items-center mb-8">
        <div
          className="flex min-w-[82px] items-center py-2 px-3 border rounded-[36px] h-10 cursor-pointer border-gray-200 bg-white text-gray-400 gap-2"
          onClick={() => setIsOpenAddModal(true)}
        >
          <h5 className="mt-1">Add</h5>
          <Image src={plus} alt="" />
        </div>
        <div className="overflow-hidden max-w-[430px]">
          <article
            className="flex gap-2.5 py-4 mx-2 ease-in-out duration-1000"
            style={{ transform: `translateX(calc(${menuIndex}*-427px))` }}
          >
            {MENUS.map(({ id, title }) => (
              <div
                key={id}
                className={`py-2 px-3 border rounded-[36px] h-10 cursor-pointer hover:bg-[#F3F4F6] hover:text-gray-400 hover:border-gray-200 ${
                  index === id
                    ? "border-black bg-black text-white"
                    : "border-gray-200 bg-white text-gray-400"
                }`}
                onClick={() => setIndex(id)}
              >
                <h5>{title}</h5>
              </div>
            ))}
          </article>
        </div>
        {!firstIndex && (
          <Image
            src={arrow}
            alt=""
            className="absolute right-10 top-0 mt-[2px] cursor-pointer rotate-180"
            onClick={handlePrev}
          />
        )}
        {!lastIndex && (
          <Image
            src={arrow}
            alt=""
            className="absolute right-0 top-0 mt-2.5 cursor-pointer"
            onClick={handleNext}
          />
        )}
      </section>
      <section>
        <article className="flex gap-6 mb-7">
          <h1 className="text-3xl mt-1 flex-1 text-[#111111]">{title}</h1>
          <Image src={refresh} alt="" className="cursor-pointer" />
          <Image src={pen} alt="" className="cursor-pointer" />
          <Image src={trash} alt="" className="cursor-pointer" />
        </article>
        <article className="flex gap-6 mb-5 items-center text-gray-500 text-4xl">
          <p className="text-xl font-medium flex-1">Total Assets</p>
          <h1 className="text-[#111111]">{total.toLocaleString()} $</h1>
        </article>
        <article className="flex gap-6 mb-5 items-center text-gray-500">
          <p className="text-xl font-medium flex-1">Maximum loss</p>
          <h1
            className={`text-3xl ${
              loss === 0 ? "text-black" : "text-[#DF1525]"
            }`}
          >
            {loss.toLocaleString()} $
          </h1>
        </article>
      </section>
      <section className="border w-[290px] h-[290px] flex justify-center items-center mx-auto my-10">
        Chart
      </section>
      <section className="border border-gray-200 pt-4 pb-2 px-5 max-w-[234px] rounded-20 mb-4 ml-2 max-h-[136px] overflow-y-scroll customScrollBar">
        {coin.length !== 0 ? (
          coin.map(({ id, coin, amount }) => (
            <div
              key={id}
              className="flex text-[#111111] text-sm mb-2 items-center"
            >
              <div className="w-3 h-3 bg-[#5550FF] rounded-[50%] mb-[2px] mr-2" />
              <h6 className="flex-1">{coin}</h6>
              <h6>{amount}%</h6>
            </div>
          ))
        ) : (
          <>
            <div className="flex text-[#111111] text-sm mb-2 items-center">
              <div className="w-3 h-3 bg-[#5550FF] rounded-[50%] mb-[2px] mr-2" />
              <h6 className="flex-1">-</h6>
              <h6>0%</h6>
            </div>
            <div className="flex text-[#111111] text-sm mb-2 items-center">
              <div className="w-3 h-3 bg-[#5550FF] rounded-[50%] mb-[2px] mr-2" />
              <h6 className="flex-1">-</h6>
              <h6>0%</h6>
            </div>
            <div className="flex text-[#111111] text-sm mb-2 items-center">
              <div className="w-3 h-3 bg-[#5550FF] rounded-[50%] mb-[2px] mr-2" />
              <h6 className="flex-1">-</h6>
              <h6>0%</h6>
            </div>
            <div className="flex text-[#111111] text-sm mb-2 items-center">
              <div className="w-3 h-3 bg-[#5550FF] rounded-[50%] mb-[2px] mr-2" />
              <h6 className="flex-1">etc</h6>
              <h6>0%</h6>
            </div>
          </>
        )}
      </section>
    </main>
  );
};

export default Chart;
