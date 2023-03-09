import Header from "components/templates/main/Header";
import NowTrending from "components/templates/main/NowTrending";
import WorldRiskList from "components/templates/main/WorldRiskList";
import RiskLevel from "components/templates/main/RiskLevel";
import RiskWeatherNews from "components/templates/main/RiskWeatherNews";
import axios from 'axios';
import useSWR from 'swr';
import {useState} from 'react'


const fetcher = (url:any) => axios.get(url).then((res) => res.data)

export default function Main() {
  const [carouselType,setCarouselType]=useState("All")
  const [trendingType,setTrendingType]=useState("All")
  const [riskLevelType,setRiskLevelType]=useState("Very high")

  const {data:carouselDt,error:carouselErr, isValidating:carouselValid}=useSWR(`/api/carousel?type=${carouselType}`,fetcher)
  const {data:nowTrendingDt,error:nowTrendingErr, isValidating:nowTrendingValid}=useSWR(`/api/nowTrending?type=${trendingType}`,fetcher)
  const {data:riskLevelDt,error:riskLevelErr, isValidating:riskLevelValid}=useSWR(`/api/riskLevel?level=${riskLevelType}`,fetcher)

  const carouselData=carouselDt?[].concat(...carouselDt) : [];
  const nowTrendingData=nowTrendingDt?[].concat(...nowTrendingDt) : [];
  const riskLevelData=riskLevelDt?[].concat(...riskLevelDt) : [];

  console.log(carouselData)
  console.log(nowTrendingData)
  console.log(riskLevelData)

  

  return (
    <main>
      <Header carouselData={carouselData} carouselValid={carouselValid} carouselType={carouselType} setCarouselType={setCarouselType}/>
      <WorldRiskList />
      <NowTrending nowTrendingData={nowTrendingData}  nowTrendingValid={nowTrendingValid} trendingType={trendingType} setTrendingType={setTrendingType} />
      <RiskLevel riskLevelData={riskLevelData} riskLevelValid={riskLevelValid} riskLevelType={riskLevelType} setRiskLevelType={setRiskLevelType}/>
      <RiskWeatherNews />
    </main>
  );
}

