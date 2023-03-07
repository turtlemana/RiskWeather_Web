import Header from "components/templates/main/Header";
import NowTrending from "components/templates/main/NowTrending";
import WorldRiskList from "components/templates/main/WorldRiskList";
import RiskLevel from "components/templates/main/RiskLevel";
import RiskWeatherNews from "components/templates/main/RiskWeatherNews";

export default function Main() {
  return (
    <main>
      <Header />
      <WorldRiskList />
      <NowTrending />
      <RiskLevel />
      <RiskWeatherNews />
    </main>
  );
}
