import Image from "next/image";

import { COLORS } from "datas/main";
import { IMAGES } from "datas/weather";
import { Card } from "types/main";
import MiniChart from "chart/MiniChart";
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
const Items = ({ name,ticker,riskLevel,maxLoss,price,currency, priceChange,chartData,weather,weatherExplain }: Props) => {

const router=useRouter()
  return (
    <tr key={ticker} className="border-b border-gray-100 cursor-pointer" onClick={()=>{router.push({pathname:`/detail/${ticker}`})}}>
      <td>
        {/* <h6 className="ml-8">{id + 1}</h6> */}
      </td>
      <td className="flex items-center py-3 ">
        <img src={`/images/logos/${ticker}.png` || ""} alt="" className="h-10 w-10 mr-3" />
        <h6 className="mr-3 text-sm">{name}</h6>
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
      <td className="flex justify-center">
      <MiniChart chartData={chartData}/>
      </td>
      <td className="mr-8">
        <div className="rounded-20 bg-gray-100 py-[2px] pl-3 pr-4 max-w-[174px] mx-auto flex items-center justify-between ">
          <Image width={0} height={0} sizes="100vw" className="w-auto h-auto" src={`/images/weather/${weather}.svg`} alt="" />
          <p className="text-xs text-gray-600 font-medium">{weatherExplain}</p>
        </div>
      </td>
    </tr>
  );
};

export default Items;
