import Header from "components/templates/main/Header";
import NowTrending from "components/templates/main/NowTrending";
import WorldRiskList from "components/templates/main/WorldRiskList";
import WorldMap from "components/templates/main/WorldMap"
import RiskLevel from "components/templates/main/RiskLevel";
import RiskWeatherNews from "components/templates/main/RiskWeatherNews";
import axios from 'axios';
import useSWR from 'swr';
import {useState} from 'react'


interface Props{
  indexData:any;
}

const fetcher = (url:any) => axios.get(url).then((res) => res.data)

export default function Main({indexData}:Props) {
  const [carouselType,setCarouselType]=useState("All")
  const [trendingType,setTrendingType]=useState("All")
  const [riskLevelType,setRiskLevelType]=useState("Very high")
  const [mapSelect, setMapSelect]=useState("")

  console.log("idx", indexData)

  const {data:carouselDt,error:carouselErr, isValidating:carouselValid}=useSWR(`/api/carousel?type=${carouselType}`,fetcher)
  const {data:nowTrendingDt,error:nowTrendingErr, isValidating:nowTrendingValid}=useSWR(`/api/nowTrending?type=${trendingType}`,fetcher)
  const {data:riskLevelDt,error:riskLevelErr, isValidating:riskLevelValid}=useSWR(`/api/riskLevel?level=${riskLevelType}`,fetcher)
  const {data:locDt,error:mapErr, isValidating:locValid}=useSWR(mapSelect ? `/api/mapResult?mapSelect=${mapSelect}`:null,fetcher)
  // const {data:mapIndexDt,error:mapIndexErr, isValidating:mapIndexValid,mutate:indexMutate}=useSWR(`/api/mapIndex`,fetcher)

  const carouselData=carouselDt?[].concat(...carouselDt) : [];
  const nowTrendingData=nowTrendingDt?[].concat(...nowTrendingDt) : [];
  const riskLevelData=riskLevelDt?[].concat(...riskLevelDt) : [];
  const locData=locDt?[].concat(...locDt) : [];
  // const mapIndexData=mapIndexDt?[].concat(...mapIndexDt) : [];

  console.log(carouselData)
  console.log(nowTrendingData)
  console.log(riskLevelData)
  console.log(locData)

  

  return (
    <main>
      <Header carouselData={carouselData} carouselValid={carouselValid} carouselType={carouselType} setCarouselType={setCarouselType}/>
      <WorldMap mapIndexData={indexData}  locData={locData} locValid={locValid} mapSelect={mapSelect} setMapSelect={setMapSelect}/>
      <NowTrending nowTrendingData={nowTrendingData}  nowTrendingValid={nowTrendingValid} trendingType={trendingType} setTrendingType={setTrendingType} />
      <RiskLevel riskLevelData={riskLevelData} riskLevelValid={riskLevelValid} riskLevelType={riskLevelType} setRiskLevelType={setRiskLevelType}/>
      <RiskWeatherNews />
    </main>
  );
}

