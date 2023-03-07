import Image from "next/image";
import { useState } from "react";

import { DOWNLOAD, MENU_LIST } from "datas/detail";
import download from "assets/icons/detail/download.svg";
import plus from "assets/icons/detail/plus.svg";
import minus from "assets/icons/detail/minus.svg";
import check from "assets/icons/explore/check.svg";
import blueCheck from "assets/icons/explore/blueCheck.svg";

const Graph = () => {
  const [index, setIndex] = useState(0);
  const [select, setSelect] = useState(0);
  const [isActiveDownloadModal, setIsActiveDownloadModal] = useState(false);
  const [dataCheck, setDataCheck] = useState(0);
  const [levelCheck, setLevelCheck] = useState(0);

  return (
    <main className="max-w-1320 mx-auto p-8 rounded-20 bg-white my-7">
      <section className="flex mb-[52px] relative">
        <ul className="flex gap-1.5 flex-1">
          {MENU_LIST.map(({ id, title }) => (
            <li
              key={id}
              className={`py-1 rounded-20 border min-w-[45px] text-center cursor-pointer hover:bg-[#F3F4F6] ${
                index === id && "border-[#E6F5FF] bg-[#E6F5FF]"
              }`}
              onClick={() => setIndex(id)}
            >
              <h6
                className={`text-xs h-3 pt-[3px] ${
                  id === index ? "text-[#0198FF]" : "text-gray-400"
                }`}
              >
                {title}
              </h6>
            </li>
          ))}
          <li className="flex items-center gap-2 ml-[18px]">
            <div className="w-3 h-[1.5px] bg-[#FF4D00] mb-1" />
            <p className="text-xs">Risk</p>
          </li>
          <li className="flex items-center gap-2 ml-2">
            <div className="w-3 h-[1.5px] bg-[#34BB7A] mb-1" />
            <p className="text-xs">Price</p>
          </li>
        </ul>
        <article
          className="relative flex gap-4 bg-gray-100 rounded-[14px] px-2 py-1.5 w-[128px] h-7 justify-between items-center cursor-pointer mr-5"
          onClick={() => setSelect(select === 0 ? 1 : 0)}
        >
          <span
            className="bg-white w-[60px] absolute z-10 h-6 rounded-20 ease-in-out duration-500 left-[2px]"
            style={{ transform: `translateX(calc(${select}*64px))` }}
          />
          <h6 className="h-3 text-xs w-[48px] text-center z-20">Line</h6>
          <h6 className="h-3 text-xs w-[48px] text-center z-20">Candle</h6>
        </article>
        <button
          onClick={() => setIsActiveDownloadModal((prev) => !prev)}
          className="flex gap-[5px] px-2.5 py-1.5 border border-solid border-[#0198ff] rounded-20 bg-blue-rgba hover:bg-[#CCEAFF]"
        >
          <p className="text-[#0198FF] text-xs h-3">Download CSV</p>
          <Image src={download} alt="" />
        </button>
        {isActiveDownloadModal && (
          <article className="z-30 absolute max-w-[332px] p-6 bg-white shadow-[0_0_12px_0_rgba(121,120,132,0.15)] top-8 right-0 rounded-20 border border-gray-100">
            <section className="mb-7">
              <p className="text-gray-400 font-medium">Date</p>
              <input type="date" />
            </section>
            <section className="mb-7 w-[284px]">
              <p className="text-gray-400 font-medium">Data</p>
              <div className="flex mt-3 gap-4">
                {DOWNLOAD["data"].map(({ id, title }) => (
                  <div
                    className="flex items-center mb-3 gap-2 cursor-pointer"
                    key={id}
                    onClick={() => setDataCheck(id)}
                  >
                    {dataCheck === id ? (
                      <Image src={blueCheck} alt="" className="" />
                    ) : (
                      <Image src={check} alt="" className="" />
                    )}
                    <p className="flex-1 mt-1 text-sm">{title}</p>
                  </div>
                ))}
              </div>
            </section>
            <section className="mb-9 w-[284px] ">
              <p className="text-gray-400 font-medium">Confidence level</p>
              <div className="flex mt-3 justify-between">
                {DOWNLOAD["level"].map(({ id, title }) => (
                  <div
                    className="flex items-center mb-3 gap-2 cursor-pointer"
                    key={id}
                    onClick={() => setLevelCheck(id)}
                  >
                    {levelCheck === id ? (
                      <Image src={blueCheck} alt="" className="" />
                    ) : (
                      <Image src={check} alt="" className="" />
                    )}
                    <p className="flex-1 mt-1 text-sm">{title}</p>
                  </div>
                ))}
              </div>
            </section>
            <button className="bg-[#0198FF] text-white w-full py-3 rounded-[60px] hover:bg-[#0085E6] disabled:bg-[#D1D5DB]">
              Download
            </button>
          </article>
        )}
      </section>
      <section className="w-full h-[260px] bg-gray-200" />
      <section className="flex w-full justify-end gap-1">
        <Image src={plus} alt="" />
        <Image src={minus} alt="" />
      </section>
    </main>
  );
};

export default Graph;
