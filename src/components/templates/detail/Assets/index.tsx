import Image from "next/image";
import { useState } from "react";

import left from "assets/icons/detail/left.svg";
import right from "assets/icons/detail/right.svg";
import { TRENDING_LIST } from "datas/main";
import Card from "components/templates/detail/Assets/Card";
import Indicator from "components/templates/detail/Assets/Indicator";

const Assets = () => {
  const [index, setIndex] = useState(1);
  const array = TRENDING_LIST.slice((index - 1) * 4, index * 4);

  const isFirst = index === 1;
  const isLast = index * 4 >= TRENDING_LIST.length;
  const handlePrev = () => !isFirst && setIndex(index - 1);
  const handleNext = () => !isLast && setIndex(index + 1);

  return (
    <main className="mb-7">
      <div className="p-8 max-w-1320 w-full mx-auto bg-white rounded-20 overflow-auto">
        <header className="flex justify-between mb-10">
          <article>
            <h1 className="text-2xl text-[#111111] mb-3">Correlated Assets</h1>
            <p className="text-sm text-gray-500">
              Top 10 assets with a high correlation of tail risk
            </p>
          </article>
          <article className="flex">
            <Image
              src={left}
              alt=""
              onClick={handlePrev}
              className={`${isFirst && "opacity-0"} 
              ${!isFirst && "cursor-pointer"}`}
            />
            <Image
              src={right}
              alt=""
              onClick={handleNext}
              className={`${isLast && "opacity-0"} ${
                !isLast && "cursor-pointer"
              }`}
            />
          </article>
        </header>
        <div className="flex">
          {array.map((data) => (
            <Card key={data.id} data={data} />
          ))}
        </div>
        <Indicator
          total={TRENDING_LIST.length}
          page={index}
          setPage={setIndex}
        />
      </div>
    </main>
  );
};

export default Assets;
