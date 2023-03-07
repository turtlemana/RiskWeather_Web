import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import arrow from "assets/icons/login/arrow.svg";
import coin from "assets/icons/login/coin.svg";
import check from "assets/icons/login/check.svg";
import { COINS } from "datas/login";

const Assets = () => {
  const [selectCoin, setSelectCoin] = useState<Number[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleSelect = (id: number) => {
    if (selectCoin.includes(id)) {
      const filtered = selectCoin.filter((data) => data !== id);
      return setSelectCoin(filtered);
    }
    return setSelectCoin([...selectCoin, id]);
  };

  return (
    <main
      className="relative py-[100px] bg-white text-center shadow-[0_0_12px_0_rgba(121,120,132,0.15)]"
      onClick={() => isModalOpen && setIsModalOpen(false)}
    >
      <section className="relative max-w-1320 mx-auto">
        <p className="text-4xl text-[#111111] font-medium mb-6">
          Choose assets you’re interested in.
        </p>
        <div
          className="flex absolute right-0 top-3 cursor-pointer"
          onClick={() => setIsModalOpen(true)}
        >
          skip
          <Image src={arrow} alt="" className="mb-1" />
        </div>
      </section>
      <p className="text-[#111111] mb-[68px]">
        Please select up to 10 assets. <br />
        Riskweather will measure your risk tolerance based on the chosen assets.
      </p>
      <section className="mb-7 max-w-[992px] mx-auto flex flex-wrap gap-12">
        {COINS.map(({ id, name }) => (
          <article
            className="cursor-pointer w-[160px]"
            key={id}
            onClick={() => handleSelect(id)}
          >
            <div className="relative mb-4 w-[100px] mx-auto">
              <Image
                src={coin}
                alt=""
                className={`${selectCoin.includes(id) && "bg-light-gray-rgba"} 
                rounded-[60px]`}
              />
              {selectCoin.includes(id) && (
                <Image
                  src={check}
                  alt=""
                  className="absolute top-1/2 left-1/2 translate-x-half translate-y-half"
                />
              )}
            </div>
            <h5 className="text-xl text-[#111111] w-full text-center">
              {name}
            </h5>
          </article>
        ))}
      </section>
      {isModalOpen && (
        <article className="border bg-white w-[415px] py-12 rounded-20 absolute top-1/2 left-1/2 translate-x-half translate-y-half z-20">
          <h1 className="text-2xl text-[#111111] mb-4">
            Welcome to Riskweather
          </h1>
          <p className="text-[#111111] mb-9">
            You can re-test risk tolerance on My page.
          </p>
          <Link
            href="/"
            className="bg-[#0198FF] text-white font-bold py-3 w-full rounded-[60px] max-w-[351px] px-[155px] hover:bg-[#0085E6]"
          >
            Start
          </Link>
        </article>
      )}
    </main>
  );
};

export default Assets;
