import { Dispatch, SetStateAction, useState } from "react";
import Image from "next/image";

import close from "assets/icons/contact/close.svg";
import checkbox from "assets/icons/portfolio/checkbox.svg";
import blueCheckbox from "assets/icons/portfolio/blueCheckbox.svg";
import search from "assets/icons/header/search.png";
import { EXPLORES } from "datas/explore";
import { COLORS } from "datas/main";
import { IMAGES } from "datas/weather";
import { Card } from "types/main";

interface Props {
  setIsOpenAddModal: Dispatch<SetStateAction<boolean>>;
}

const AddAssets = ({ setIsOpenAddModal }: Props) => {
  const [selectIndex, setSelectIndex] = useState<Number[]>([]);
  const handleSelect = (i: number) => {
    if (selectIndex.includes(i)) {
      const filtered = selectIndex.filter((data) => data !== i);
      return setSelectIndex(filtered);
    }
    return setSelectIndex([...selectIndex, i]);
  };

  return (
    <main className="absolute text-center text-[#111111] bg-white p-8 rounded-20 top-1/2 left-1/2 translate-x-half translate-y-half border max-w-[1018px] w-full">
      <header className="flex mb-8">
        <section className="flex-1 flex">
          <article className="w-[272px] mr-4 h-10 py-2.5 px-4 flex items-center border border-solid border-gray-200 rounded-20 hover:border-[#4B5563]">
            <Image src={search} alt="search" className="mr-2 w-4" />
            <input placeholder="Search Name" className="outline-none text-sm" />
          </article>
          <button className="bg-[#0198FF] h-10 py-2.5 px-5 rounded-[60px] text-white text-sm hover:bg-[#0085E6] disabled:bg-[#D1D5DB]">
            <h1>Add Assets</h1>
          </button>
        </section>
        <Image
          src={close}
          alt=""
          className="cursor-pointer"
          onClick={() => setIsOpenAddModal(false)}
        />
      </header>
      <section className="flex items-center border-gray-200 border-b py-3 text-sm text-gray-600 font-medium ">
        <Image src={checkbox} alt="" className="mr-5" />
        <p className="text-left w-[217px] mr-11">Name</p>
        <p className="w-[83px] mr-11">Risk</p>
        <p className="w-[124px] mr-11">Maximum loss</p>
        <p className="w-[140px] mr-11">Price</p>
        <p className="w-[174px]">Weather</p>
      </section>
      <section className="overflow-auto h-[396px] customScrollBar">
        {EXPLORES.map((data: Card, i) => (
          <article
            key={data.id}
            className="border-b border-gray-100 flex py-3 items-center"
          >
            {selectIndex.includes(i) ? (
              <Image
                src={blueCheckbox}
                alt=""
                className="mr-5 cursor-pointer"
                onClick={() => handleSelect(i)}
              />
            ) : (
              <Image
                src={checkbox}
                alt=""
                className="mr-5 cursor-pointer"
                onClick={() => handleSelect(i)}
              />
            )}
            <div className="flex items-center w-[217px] mr-11">
              <Image src={data.image || ""} alt="" className="h-10 mr-3" />
              <div>
                <h6 className="">{data.name}</h6>
                <p className="text-gray-500 text-xs">{data.subName}</p>
              </div>
            </div>
            <div
              className={`py-1 px-3 rounded-20 ${
                COLORS[data.risk]
              } w-[83px] mr-11`}
            >
              <h6 className="text-xs">{data.risk}</h6>
            </div>
            <div className="text-center text-[#DF1525] w-[124px] mr-11">
              -{data.maximumLoss}%
            </div>
            <div className="text-center w-[140px] mr-11 text-[#111111]">
              {data.price}
            </div>
            <div className="rounded-20 bg-gray-100 py-[2px] pl-3 pr-6 w-[174px] mx-auto flex items-center justify-between ">
              <Image src={IMAGES[data.weatherIcon]} alt="" />
              <p className="text-xs text-gray-600 font-medium">
                {data.weather}
              </p>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
};

export default AddAssets;
