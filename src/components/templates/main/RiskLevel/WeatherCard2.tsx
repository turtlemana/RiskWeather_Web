import Image from "next/image";

import { COLORS } from "datas/main";
import { IMAGES } from "datas/weather";
import { Card } from "types/main";
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

const WeatherCard2 = ({ name,ticker,riskLevel,maxLoss,price,currency, priceChange,chartData,weather,weatherExplain }: Props) => {

const router=useRouter()
  return (
    <main className="mr-6 p-5 cursor-pointer rounded-20 min-w-[296px] max-h-[180px] shadow-[0_0_12px_0_rgba(121,120,132,0.15)]" onClick={()=>{router.push({pathname:`/detail/${ticker}`})}}>
      <section className="flex gap-3 items-start mb-3" >
        <img loading="eager" src={`/images/logos/${ticker}.png` || ""} alt="" className="h-10 w-10 mr-3"/>
        <article className="flex-1">
          <h6 className="mb-1 text-[10px]">{name}</h6>
          <p className="text-[5px] text-gray-500">{ticker}</p>
        </article>
        <div className={`py-1 px-1 rounded-20 text-center ${COLORS[riskLevel]}`}>
          <h6 className="text-[10px] h-3.5">{riskLevel}</h6>
        </div>
      </section>
      <section className="flex pt-3 justify-between mb-4">
        <p className="text-[12px] text-gray-500">Maximum loss</p>
        <h6 className="text-[#DF1525]">-{maxLoss}%</h6>
      </section>
      <section className="text-center flex items-center justify-between bg-gray-100 rounded-20 pl-3 pr-4">
        <Image src={`/images/weather/${weather}.svg`} alt="" width={0} height={0} sizes="100vw" className="w-9 h-auto"  />
        <p className="text-xs font-medium">{weatherExplain}</p>
      </section>
    </main>
  );
};

export default WeatherCard2;
