import Image from "next/image";
import { useState,useEffect,useMemo } from "react";
import { useRouter } from "next/router";
import { RISKS, RISK_MENUS } from "datas/main";
import { COLORS } from "datas/main";

import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  ZoomableGroup
} from "react-simple-maps";
import {AiOutlineGlobal} from 'react-icons/ai'
import world from "assets/icons/main/world.svg";

const geoUrl =
  "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json"

const markers=[
   

    {markerOffset: 25, name: "Washington", country:"United States of America", loc:"United States",coordinates: [-77, 38.8833], ticker:"^IXIC" ,countryCode:"us" },
    // {markerOffset: 25, name: "Ottawa", country:"Canada",coordinates: [-75.7, 45.41667],countryCode:"ca" },
    {markerOffset: 25, name: "Seoul", country:"South Korea", loc:"Korea (South)", coordinates: [126.9833, 37.55], ticker:"^KS11" ,countryCode:"kr"},
    {markerOffset: 25, name: "Tokyo", country:"Japan", loc:"Japan",coordinates: [139.75, 35.6833],ticker:"^N225" ,countryCode:"jp"},
    {markerOffset: 25, name: "Beijing", country:"China", loc:"China", coordinates: [116.383333, 39.9166666666666],ticker:"399001.SZ" ,countryCode:"cn"},
    {markerOffset: 25, name: "Paris", country:"France", loc:"France",coordinates: [2.333333, 48.8666666666666],ticker:"ENX.PA",countryCode:"fr" },   
    {markerOffset: 25, name: "Brasilia", country:"Brazil", loc:"Brazil", coordinates: [-47.8825, -15.7942],ticker:"^BVSP",countryCode:"br"},
    {markerOffset: 25, name: "New Delhi", country:"India", loc:"India" , coordinates: [77.2, 28.6], ticker:"^NSEI",countryCode:"in" },
    {markerOffset: 25, name: "Berlin", country:"Germany",loc:"Germany",coordinates: [13.4, 52.51667],ticker:"^GDAXI" ,countryCode:"de"},
    {markerOffset: 25, name: "Amsterdam", country:"Netherlands",loc:"Netherlands",coordinates: [4.916667, 52.35] ,ticker:"^AEX",countryCode:"NL"},
    {markerOffset: 25, name: "Taipei", country:"Taiwan",loc:"Taiwan",coordinates: [121.5167, 25.03333] ,ticker:"^TWII",countryCode:"TW"},
    {markerOffset: 25, name: "London", country:"United Kingdom",loc:"United Kingdom",coordinates: [-0.083333, 51.5],ticker:"^FTSE" ,countryCode:"gb"},
    {markerOffset: 25, name: "Bern", country:"Switzerland",loc:"Switzerland",coordinates: [7.466667, 46.91667],ticker:"^SSMI" ,countryCode:"ch"},
    {markerOffset: 25, name: "Brussels", country:"Belgium",loc:"Belgium",coordinates: [4.333333, 50.83333],ticker:"^BFX" ,countryCode:"be"},
    {markerOffset: 25, name: "Rome", country:"Italy",loc:"Italy",coordinates: [12.483333, 41.9],ticker:"FTSEMIB.MI" ,countryCode:"it"},
    {markerOffset: 25, name: "Madrid", country:"Spain", loc:"Spain",coordinates: [-3.68333, 40.4],ticker:"^IBEX" ,countryCode:"es"},
    // {markerOffset: 25, name: "Warsaw", country:"Poland",coordinates: [21, 52.25],ticker:"^FTSE" ,countryCode:"pl"},
    {markerOffset: 25, name: "Vienna", country:"Austria", loc:"Austria",coordinates: [16.36667, 48.2],ticker:"^ATX" ,countryCode:"at"},
    // {markerOffset: 25, name: "Budapest", country:"Hungary",coordinates: [19.083333, 47.5],ticker:"^FTSE" ,countryCode:"hu"},
    {markerOffset: 25, name: "Athens", country:"Greece", loc:"Greece", coordinates: [23.73333, 37.983333],ticker:"EXAE.AT" ,countryCode:"gr"},
    // {markerOffset: 25, name: "Moscow", country:"Russian Federation",coordinates: [37.6, 55.75],ticker:"^FTSE" ,countryCode:"ru"},
    // {markerOffset: 25, name: "Stockholm", country:"Sweden",coordinates: [18.05, 59.33333],ticker:"^FTSE" ,countryCode:"se"},
    {markerOffset: 25, name: "Oslo", country:"Norway", loc:"Norway", coordinates: [10.75, 59.91667],ticker:"OSEBX.OL" ,countryCode:"no"},
    {markerOffset: 25, name: "Copenhagen", country:"Denmark", loc:"Denmark",coordinates: [12.58333, 55.66667],ticker:"^OMXC25" ,countryCode:"dk"},
    {markerOffset: 25, name: "Helsinki", country:"Finland",loc:"Finland",coordinates: [24.93333, 60.16667],ticker:"^OMXH25" ,countryCode:"fi"},
    {markerOffset: 25, name: "Dublin", country:"Ireland",loc:"Ireland",coordinates: [-6.23333, 53.31667],ticker:"^ISEQ" ,countryCode:"ie"},
    // {markerOffset: 25, name: "Canberra", country:"Australia",coordinates: [149.1333, -35.2667],ticker:"^FTSE" ,countryCode:"au"},
    // {markerOffset: 25, name: "Wellington", country:"New Zealand",loc:"New Zealand",coordinates: [174.7833, -41.3],ticker:"^NZ50" ,countryCode:"nz"},
    // {markerOffset: 25, name: "Riyadh", country:"Saudi Arabia",coordinates: [46.7, 24.65],ticker:"^FTSE" ,countryCode:"sa"},
    // {markerOffset: 25, name: "Abu Dhabi", country:"United Arab Emirates",coordinates: [54.36667,24.46667],ticker:"^FTSE" ,countryCode:"ae"},
    // {markerOffset: 25, name: "Jerusalem", country:"Israel",coordinates: [35.23333, 31.76667],ticker:"^FTSE" ,countryCode:"il"},
    // {markerOffset: 25, name: "Kuwait City", country:"Kuwait",coordinates: [47.96667, 29.36667],ticker:"^FTSE" ,countryCode:"kw"},
    // {markerOffset: 25, name: "Doha", country:"Qatar",coordinates: [51.53333, 25.28333],ticker:"^FTSE" ,countryCode:"qa"},
    {markerOffset: 25, name: "Jakarta", country:"Indonesia",loc:"Indonesia",coordinates: [106.8167, -6.16667],ticker:"^JKSE" ,countryCode:"id"},
    {markerOffset: 25, name: "Singapore", country:"Singapore", loc:"Singapore",coordinates: [103.85, 1.283333],ticker:"S68.SI" ,countryCode:"sg"},
    // {markerOffset: 25, name: "Manila", country:"Philippines",coordinates: [120.9667, 14.6],ticker:"^FTSE" ,countryCode:"ph"},
    {markerOffset: 25, name: "Mexico City", country:"Mexico",loc:"Mexico",coordinates: [-99.1333, 19.4333],ticker:"BOLSAA.MX" ,countryCode:"mx"},
    // {markerOffset: 25, name: "Lima", country:"Peru",coordinates: [-77.05, -12.05],ticker:"^FTSE" ,countryCode:"pe"},
    {markerOffset: 25, name: "Bogota", country:"Colombia",loc:"Colombia",coordinates: [-74.0833, 4.6],ticker:"BVC.CL" ,countryCode:"co"},
    // {markerOffset: 25, name: "Santiago", country:"Chile",coordinates: [-70.6667, -33.45],ticker:"^FTSE" ,countryCode:"cl"},
    {markerOffset: 25, name: "Pretoria", country:"South Africa",loc:"South Africa",coordinates: [28.21667, -25.7],ticker:"JSE.JO" ,countryCode:"za"},
]


const WorldMap = ({locData,locValid,mapSelect,setMapSelect,mapIndexData}) => {
  const [index, setIndex] = useState(0);
  const router=useRouter();
  console.log("mapdt",locData)
  console.log("mapidxdt",mapIndexData)
  console.log("mapse",mapSelect)


  const [isMounted,setIsMounted] = useState(false);
  const [mapMarkers, setMapMarkers]=useState(markers)

  const [position, setPosition] = useState({ coordinates: [30, 10], zoom: 1.1 ,color:"#EAEAEC"});
  const handleFilter = ({ constructor: { name } }) => {
    return name !== "WheelEvent" && name!=="MouseEvent";
  };

  const indexData=useMemo(()=>{return mapIndexData},[mapIndexData])
  useEffect(()=>{
    setIsMounted(true);
    for (let i=0; i<markers.length; i++){
        for (let j=0; j<mapIndexData.length; j++){
        if(markers[i].ticker == mapIndexData[j].ITEM_CD_DL){
          markers[i].weather=mapIndexData[j].WTHR_ENG_NM
          markers[i].weatherExplain=mapIndexData[j].WTHR_ENG_DL
          markers[i].assetName=mapIndexData[j].ITEM_ENG_NM
          markers[i].risk=(mapIndexData[j].CVaR_LV)
          markers[i].maxLoss=(mapIndexData[j].CVaRNTS)
        //   markers[i].onClick=(mapData[j].onClick)
        }}
      }
},[mapIndexData])


  return (
    <main className="flex pt-[190px] mb-7 px-5 items-center justify-center">
      <div className={(`max-w-1320 w-full mx-auto bg-white flex rounded-20 overflow-hidden `) + (locValid ? `items-center` : ``)}>
        <section className="w-[352px] max-h-[780px] flex flex-col justify-center items-center">
       {locValid ? "" : <article className="flex items-center  p-8 cursor-pointer" onClick={()=>{setMapSelect("");setPosition((pos)=>({...pos, zoom:1.1, coordinates:[30,10], name:""}));setMapMarkers(markers)}}>
           
          
          <Image src={world} alt="" />
              <h5 className="h-5 ml-3 text-sm">World Risk Weather List</h5>
          </article>}
          <article className="pl-8 pr-7 mt-1 flex-1 overflow-auto customScrollBar items-center justify-center">
            {locData.length<1 &&!locValid ?  mapMarkers.map(({ loc,countryCode,name,country,coordinates }) => (
              <div
                key={loc}
                className="flex items-center justify-between px-[14px] py-4 mt-1 cursor-pointer hover:bg-gray-100"
                onClick={()=>{setMapSelect(loc);setMapMarkers((marker)=>(marker.filter((country)=>country.name==name)));setPosition((pos)=>({...pos,zoom:4,coordinates:coordinates, name:country}))}}
              >
                <Image width={0} height={0} className={'w-10 h-10'} alt="flags" src={`/images/flags/${countryCode}.svg`}/>
                <h5 className={'text-sm'}>{loc}</h5>
                {/* <p>{coin.toLocaleString()} coins</p> */}
              </div>
            ))
        :   locValid? 
        <svg aria-hidden="true" className="w-12 h-12 relative  text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
        </svg>
     :            
       locData.map(({ITEM_CD_DL,ITEM_ENG_NM,WTHR_ENG_DL,WTHR_ENG_NM,CVaRNTS,CVaR_LV})=> <div
        key={ITEM_CD_DL}
        className="flex justify-between px-[14px] py-5  items-center cursor-pointer hover:bg-gray-100"
        onClick={()=>{setMapMarkers((prev)=>[{...prev[0],assetName:ITEM_ENG_NM, ticker:ITEM_CD_DL, weather:WTHR_ENG_NM, weatherExplain:WTHR_ENG_DL, risk:CVaR_LV, maxLoss:CVaRNTS}])}}
      >
        <div className={'w-10 h-10 items-center'}>
        <img  className={'w-auto h-auto items-center'} alt="logo" src={`/images/logos/${ITEM_CD_DL}.png`}/>
        </div>
        <p className={'text-xs'}>{ITEM_ENG_NM}</p>
        <div className={`py-1 px-1 rounded-20 text-center ${COLORS[CVaR_LV]}`}>
          <h6 className="text-[10px] h-3.5">{CVaR_LV}</h6>
        </div>
        <Image  width={25} height={25} src={`/images/weather/${WTHR_ENG_NM}.svg`} alt={`${WTHR_ENG_NM}`}></Image>

        {/* <p>{coin.toLocaleString()} coins</p> */}
      </div>)}
          </article>
        </section>
        <div className={`overflow-auto w-full h-full bg-[#AFD5F0]`}>

<ComposableMap className={`w-full h-full m-auto`} projectionConfig={{}} projection={"geoMercator"}  >
    <ZoomableGroup center={position.coordinates} zoom={position.zoom}       
 filterZoomEvent={handleFilter} >
<Geographies geography={geoUrl}>
{({ geographies }) =>
  geographies.map((geo) => {
    const country=geo.properties.name

    return(
    <Geography
      key={geo.rsmKey}
      geography={geo}
    fill={country==position.name ? "#1E3F66": "#FFFFFF"}
      stroke="#AFD5F0"
      style={{
       default: {
         outline: "none",
       },
       hover: {
         outline: "none",
       },
       pressed: {
         outline: "none",
       },
     }}

    />)
})
}
</Geographies>

{mapMarkers.map(({ name, coordinates,country,assetName,loc,countryCode, ticker,markerOffset,risk,maxLoss,weather,weatherExplain }) => (

(<Marker key={coordinates} coordinates={coordinates}  >
 {mapMarkers.length>=2  
 ? <svg viewBox="130 0 800 800" >
    <foreignObject x="0" y="0"  width="180" height="80">
      <div onClick={()=>{setMapSelect(loc);setMapMarkers((marker)=>(marker.filter((country)=>country.name==name)));setPosition((pos)=>({...pos,zoom:4,coordinates:coordinates, name:country}))}} className={`cursor-pointer w-full border items-center bg-white border-gray-100 p-3 rounded-lg flex text-[5px] opacity-80 justify-center`}>
      <Image  width={20} height={25} src={`/images/flags/${countryCode}.svg`} alt={`${countryCode}`}></Image>
       <p className={`ml-5 text-xs `}>{name}</p>
       {/* <div className={`py-1 px-1 rounded-20 text-center ${COLORS[risk]}`}>
          <h6 className="text-[10px] h-3.5">{risk}</h6>
        </div> */}
       <div className={`ml-5`}>
      <Image  width={25} height={25} src={`/images/weather/${weather}.svg`} alt={`${weather}`}></Image>
      </div>
       </div>          
    </foreignObject>
 </svg>
 : 
 <svg viewBox="450 -0 2800 2800">
 <foreignObject  width="350" height="500">


<main className="bg-white mr-6 p-5 cursor-pointer rounded-20 min-w-[296px] max-h-[180px] shadow-[0_0_12px_0_rgba(121,120,132,0.15)]" onClick={()=>{router.push({pathname:`/detail/${ticker}`})}}>
      <section className="flex gap-3 items-center mb-3" >
        <div className={'w-10 h-auto '}>
        <img loading="eager" src={`/images/logos/${ticker}.png` || ""} alt="" className="h-auto w-auto mr-3"/>
        </div>
        <article className="flex-1">
          <h6 className="mb-1 text-sm">{assetName}</h6>
          <p className="text-[5px] text-gray-500">{ticker}</p>
        </article>
        <div className={`py-1 px-1 rounded-20 text-center ${COLORS[risk]}`}>
          <h6 className="text-[10px] h-3.5">{risk}</h6>
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

</foreignObject>
</svg>
 }

  <circle r={2} fill="#0198FF" stroke="#fff" strokeWidth={1} />

  {/* <svg width="32" height="46" viewBox="10 10 320 460"  fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16 46C17.6569 46 19 44.6569 19 43C19 41.3431 17.6569 40 16 40C14.3431 40 13 41.3431 13 43C13 44.6569 14.3431 46 16 46Z" fill="#0198FF"/>
<path d="M26 13C26 22 16 29 16 29C16 29 6 22 6 13C6 10.3478 7.05357 7.8043 8.92893 5.92893C10.8043 4.05357 13.3478 3 16 3C18.6522 3 21.1957 4.05357 23.0711 5.92893C24.9464 7.8043 26 10.3478 26 13Z" fill="#0198FF"/>
<path d="M16 17C18.2091 17 20 15.2091 20 13C20 10.7909 18.2091 9 16 9C13.7909 9 12 10.7909 12 13C12 15.2091 13.7909 17 16 17Z" fill="white"/>
</svg> */}

   
</Marker>)

))}
</ZoomableGroup>
</ComposableMap>

</div>
      </div>
    </main>
  );
};

export default WorldMap;
