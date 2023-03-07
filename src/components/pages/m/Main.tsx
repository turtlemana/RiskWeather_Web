import Header from "components/templates/m/main/Header";
import NowTrending from "components/templates/m/main/NowTrending";
import WorldRiskList from "components/templates/m/main/WorldRiskList";
import RiskLevel from "components/templates/m/main/RiskLevel";
import RiskWeatherNews from "components/templates/m/main/RiskWeatherNews";

export default function Main() {
  return (
    <main className="bg-white">
      <Header />
      <WorldRiskList />
      <NowTrending />
      <RiskLevel />
      <RiskWeatherNews />
    </main>
  );
}
