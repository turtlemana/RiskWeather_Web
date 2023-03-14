import { COIN } from "datas/detail";
import Graph from "components/templates/detail/Graph";
import Stock from "components/templates/detail/Stock";
import Top from "components/templates/detail/Top";
import Assets from "components/templates/detail/Assets";
import RiskWeatherNews from "components/templates/detail/RiskWeatherNews";

interface Props{
  detailData:{
    ADJ_CLOSE:number;
    BASE_DT:string|Date;
    CURR:string;
    CVaRNTS:number;
    CVaR_LV:string;
    ITEM_CD:string; 
    ITEM_CD_DL:string; 
    ITEM_ENG_NM:string; 
    ITEM_KR_NM:string;
    LOC:string; 
    SECT:string; 
    UDT_DT:string|Date;
    VOLUME:number; 
    WTHR_ENG_NM:string; 
    WTHR_ENG_DL:string;

  };
}

const Detail = ({detailData}:Props) => {
  console.log("detDat",detailData)
  return (
    <div className="pt-5 px-5">
      <Top name={detailData['ITEM_ENG_NM']} ticker={detailData['ITEM_CD_DL']} riskLevel={detailData['CVaR_LV']} price={detailData['ADJ_CLOSE']} maxLoss={detailData['CVaRNTS']} currency={detailData['CURR']} priceChange={-2.99} weather={detailData['WTHR_ENG_NM']} weatherExplain={detailData['WTHR_ENG_DL']} date={detailData['UDT_DT']} />
      <Graph />
      <Stock />
      <Assets />
      <RiskWeatherNews />
    </div>
  );
};
export default Detail;
