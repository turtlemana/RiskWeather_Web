import Image from "next/image";

import { COLORS } from "datas/main";
import { IMAGES } from "datas/weather";
import { Card } from "types/main";
import arrow from "assets/icons/explore/rightArrow.svg";
import { useRouter } from "next/router";
import MiniChart from 'chart/MiniChart';

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



const Items = ({ name,ticker,riskLevel,maxLoss,price,currency, priceChange,chartData,weather,weatherExplain }: Props) => {
    const router=useRouter()
    console.log(ticker)
  return (
    <tr key={ticker} className="border-b border-gray-100 " onClick={()=>{router.push({pathname:`/detail`, query:{asset:ticker}})}}>
      <td className="flex items-center py-3 pl-8">
        <img width={0} height={0} sizes="100vw" className="w-auto h-10 mr-3"   loading="eager"  src={`/images/logos/${ticker}.png` || ""} alt=""  />
        <h6 className="mr-3">{name}</h6>
        <p className="text-gray-500 text-xs">{ticker}</p>
      </td>
      <td>
        <div
          className={`py-1 px-3 rounded-20 ${COLORS[riskLevel]} max-w-fit mx-auto`}
        >
          <h6 className="text-xs">{riskLevel}</h6>
        </div>
      </td>
      <td className="text-center text-[#DF1525]">-{maxLoss}%</td>
      <td className="text-center">{price.toFixed(4)}{" "}{currency}</td>
      <td className="text-center text-[#DF1525]">{priceChange}</td>
      <td className="flex justify-center">
        <MiniChart chartData={chartData}/>
        {/* <Image width={0} height={0} sizes="100vw" className="w-auto h-auto" src={'/images/icons/main/chart.svg' || ""} alt="" /> */}
      </td>
      <td>
        <div className="rounded-20 bg-gray-100 py-[2px] pl-3 pr-4 max-w-[174px] mx-auto flex items-center justify-between ">
          <Image width={0} height={0} sizes="100vw" className="w-auto h-auto" src={`/images/weather/${weather}.svg`} alt="" />
          <p className="text-xs text-gray-600 font-medium">{weatherExplain}</p>
        </div>
      </td>
      <td>
        <Image src={arrow} alt="" />
      </td>
    </tr>
  );
};

export default Items;
