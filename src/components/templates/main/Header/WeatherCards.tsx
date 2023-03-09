import Image from "next/image";

import { COLORS } from "datas/main";
import { IMAGES } from "datas/weather";
import { Card } from "types/main";
import graph from "assets/icons/main/graph.svg";
import bitcoin from "assets/icons/main/bitcoin.png";
import MiniChart from "chart/MiniChart";
import CardChart from 'chart/CardChart'
import { useRouter } from "next/router";

interface Props {
    name?:string; 
    ticker?:string; 
    riskLevel:string;
    maxLoss?:number|string;
    price: number;
    currency?:string;
    priceChange?:string|number;
    chartData?: string | JSON;  
    weather?:string;
    weatherExplain?:string;
  }
const WeatherCards = ({ name,ticker,riskLevel,maxLoss,price,currency, priceChange,chartData,weather,weatherExplain }: Props) => {
    const router=useRouter();

  return (
    <main className="relative p-5   rounded-t-20 cursor-pointer bg-white min-w-[282px] h-[262px]" onClick={()=>{router.push({pathname:`/detail/${ticker}`})}}>
      <section className="flex gap-3 items-start mb-3">
      <img loading="eager" src={`/images/logos/${ticker}.png` || ""} alt="" className="h-10 w-10 mr-3"/>
        <article className="flex-1">
          <h6 className="mb-1 text-[10px]">{name}</h6>
          <p className="text-[5px] text-gray-500">{ticker}</p>
        </article>
        <div className={`py-1 px-3 rounded-20 text-center ${COLORS[riskLevel]}`}>
          <h6 className="h-5 text-xs">{riskLevel}</h6>
        </div>
      </section>
      <section className="flex gap-3 items-start mb-6">
        <article className="flex-1 pt-3">
          <h6 className="mb-1">
            ${price?.toFixed(4)}
          </h6>
          <p className="text-[12px] text-gray-500 mb-1">Maximum loss</p>
          <h6 className="text-[#DF1525]">-{maxLoss}%</h6>
        </article>
        <article className="text-center flex flex-col items-center">
        <Image src={`/images/weather/${weather}.svg`} alt="" width={0} height={0} sizes="100vw" className="w-16 mb-1"  />
          <h6 className="text-xs">{weatherExplain}</h6>
        </article>
      </section>
      <section className="absolute left-0 bottom-0">
        {/* <MiniChart chartData={chartData}/> */}
        <CardChart chartData={chartData}/>
      {/* <Image src={graph} alt="" className="absolute left-0 bottom-0" /> */}
      </section>
    </main>
  );
};

export default WeatherCards;
