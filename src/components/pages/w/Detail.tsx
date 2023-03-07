import { COIN } from "datas/detail";
import Graph from "components/templates/detail/Graph";
import Stock from "components/templates/detail/Stock";
import Top from "components/templates/detail/Top";
import Assets from "components/templates/detail/Assets";
import RiskWeatherNews from "components/templates/detail/RiskWeatherNews";

const Detail = () => {
  return (
    <div className="pt-5 px-5">
      <Top coin={COIN} />
      <Graph />
      <Stock />
      <Assets />
      <RiskWeatherNews />
    </div>
  );
};
export default Detail;
