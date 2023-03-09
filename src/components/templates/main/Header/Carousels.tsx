import Link from "next/link";
import Image from "next/image";
import { useState,useMemo } from "react";

import { Card } from "types/main";
import left from "assets/icons/main/left.svg";
import right from "assets/icons/main/right.svg";
import WeatherCard from "components/templates/main/Header/WeatherCard";
import WeatherCards from "./WeatherCards";

interface Props {
    carouselData:any;
}

const Carousels = ({ carouselData }: Props) => {
  const [index, setIndex] = useState(0);
  
  return (
    <div className="flex items-center gap-5 justify-center max-w-1320 mx-auto">
      <Image
        src={left}
        alt=""
        className={`w-10 cursor-pointer 
        ${index === 0 && "opacity-0"} `}
        onClick={() => index > 0 && setIndex((prev) => prev - 1)}
      />
      <div className="overflow-hidden">
        <div
          className={`flex gap-6 ease-in-out duration-1000`}
          style={{ transform: `translateX(calc(${index}*-612px))` }}
        >
          {carouselData?.map((asset: any) => (
            <Link href={`/detail/${asset['ITEM_CD_DL']}`} key={asset['ITEM_CD_DL']}>
              <WeatherCards  name={asset['ITEM_ENG_NM']} ticker={asset['ITEM_CD_DL']} key={asset['ITEM_CD_DL']} riskLevel={asset['CVaR_LV']} maxLoss={asset['CVaRNTS']} price={asset['ADJ_CLOSE']} currency={asset['CURR']} priceChange={""} chartData={JSON.parse(asset['CHART'])} weather={asset['WTHR_ENG_NM']} weatherExplain={asset['WTHR_ENG_DL']} />
            </Link>
          ))}
        </div>
      </div>
      <Image
        src={right}
        alt=""
        className={`w-10 cursor-pointer
        ${index * 4 > carouselData?.length && "opacity-0"} `}
        onClick={() => index * 4 < carouselData?.length && setIndex((prev) => prev + 1)}
      />
    </div>
  );
};

export default Carousels;
