
import Top from "components/templates/explore/Top";
import Main from "components/templates/explore/Main";
import useSWR from 'swr'
import axios from 'axios'
import {useRouter} from 'next/router'
import { Dispatch, SetStateAction, useState,useEffect,useMemo,useCallback} from "react";
import Image from "next/image";
import {
  EXCHAGNES,
  LOCATIONS,
  RISKS,
  SECTROS,
  TYPES,
  VIEWS,
  WEATHERS,
} from "datas/explore";
import search from "assets/icons/header/search.png";
import arrow from "assets/icons/explore/arrow.svg";
import blueArrow from "assets/icons/explore/blueArrow.svg";
import MultiSelect from "components/templates/explore/Top/MultiSelect";
import Select from 'components/templates/explore/Top/Select'


import { EXPLORES } from "datas/explore";
import icon from "assets/icons/explore/icon.svg";
import Item from "components/templates/explore/Main/Item";
import Items from "components/templates/explore/Main/Items"
import Pagination from "components/organisms/Pagination";
import { FaSearch } from 'react-icons/fa';



const DEFAULT_STATE = { type: 0, risk: 0, viewItems: 0 };

const fetcher = (url:any) => axios.get(url).then((res) => res.data)

const Explore = () => {
  const [views, setViews] = useState(20);
  const [page,setPage]=useState(1)
const [limit,setLimit]=useState(20)
const [type,setType]=useState("All")
const [riskLv,setRiskLv]=useState("All")
const [loc,setLoc]=useState("All")
const [sect,setSect]=useState("All")
const [exchg,setExchg]=useState("All")
const [weather,setWeather]=useState("All")
const [search, setSearch] = useState("");
const [priceOrder,setPriceOrder]=useState("neutral")
const [lossOrder,setLossOrder]=useState("neutral")
const [priceChgOrder,setPriceChgOrder]=useState("neutral")

  const {data,error,isLoading, isValidating,mutate}=useSWR(`/api/allassets?&page=${page}&limit=${limit}&type=${type}&riskLv=${riskLv}&loc=${loc}&exchg=${exchg}&sect=${sect}&weather=${weather}&search=${search}&priceOrder=${priceOrder}&lossOrder=${lossOrder}&priceChgOrder=${priceChgOrder}`,fetcher)
  const assetList=data?[].concat(...data[0].assets) : [];
  const rowCount=data? data[1].rowCount : 0;

  useEffect(()=>{setPage(1)},[type,riskLv,loc,sect,exchg,weather,search,priceOrder,lossOrder,priceChgOrder])
  console.log(assetList)

  const router=useRouter()
  const rowNumArray=useMemo(()=>{
    let rowNum=0;
    const rowArr=[];
    if(rowCount%limit==0){rowNum=rowCount/limit}else{rowNum=Math.floor(rowCount/limit) + 1}
    console.log(rowNum)
    for (let i=0; i<rowNum; i++){
        rowArr.push(i+1)
    }
    return rowArr
},[rowCount,limit])
    // Searching Method
const onSearch=useCallback((e:any)=>{
      const query=e.target.value
      if(query.length>20){return}
      setSearch(query)
    },[])

  const rowHandler=(e:any)=>{setLimit(e.target.value)}
const typeHandler=(e:any)=>{
    const assetType=e.target.value
    if(assetType==="All"){
        router.push(`/explore/`)
    }
    if(assetType==="Crypto"){
        router.push(`/explore/crypto`)
    }
    if(assetType==="Index"){
        router.push(`/explore/index`)
    }
    if(assetType==="Stock"){
        router.push(`/explore/stock`)
    }
    
}
const weatherHandler=(e:any)=>{
  const todayWeather=e.target.value
  setWeather(todayWeather)
}

const locHandler=(e:any)=>{
const location=e.target.value
setLoc(location)
}
const exchgHandler=(e:any)=>{
const exchange=e.target.value
setExchg(exchange)
}
const sectHandler=(e:any)=>{
const sector=e.target.value
setSect(sector)
}

const resetHandler=()=>{
  setWeather("All")
  setLoc("All")
  setExchg("All")
  setSect("All")
  setSearch("")
  setType("All")
  setRiskLv("All")
  setPage(1)
  setLimit(20)
  setLossOrder("neutral")
  setPriceChgOrder("neutral")  
  setPriceOrder("neutral")
  router.push(`/explore`)
}

const priceOrderHandler=()=>{
  if(priceOrder=="priceDesc"){
    setLossOrder("neutral")
    setPriceChgOrder("neutral")  
    setPriceOrder("priceAsc")


      return
  }
  setLossOrder("neutral")
  setPriceChgOrder("neutral")
      setPriceOrder("priceDesc")
}
const lossOrderHandler=()=>{
  if(lossOrder=="lossDesc"){
    setPriceChgOrder("neutral")
    setPriceOrder("neutral")
      setLossOrder("lossAsc")



      return
  }      setPriceChgOrder("neutral")
  setPriceOrder("neutral")
      setLossOrder("lossDesc")

}
const priceChgOrderHandler=()=>{
  if(priceChgOrder=="priceChgDesc"){
    setLossOrder("neutral")
    setPriceOrder("neutral")
      setPriceChgOrder("priceChgAsc")

      return
  } 
  setLossOrder("neutral")
  setPriceOrder("neutral")
      setPriceChgOrder("priceChgDesc")

}
  
  
const array = EXPLORES?.slice((page - 1) * views, page * views);

  
  const [state, setState] = useState(DEFAULT_STATE);
  const [isActive, setIsActive] = useState(false);
  // const [weather, setWeather] = useState([0]);
  const [location, setLocation] = useState([0]);
  const [exchange, setExchange] = useState([0]);
  const [sector, setSector] = useState([0]);


  return (
    
    <main className="px-5 my-5">

      <div className="max-w-1320 mx-auto rounded-20 py-8 bg-white">
        <h1 className="ml-8 text-[28px] text-[#111111] mb-10">Explore</h1>

        {/* Top */}
        <main className="max-w-1320 w-full">
      <section className="ml-8 border-b border-gray-100 pb-6 flex justify-between mr-8">
        <article className="flex gap-4 items-center w-80 justify-between">
          <h6 className="text-sm text-[#111111]">Type</h6>
          <ul className="flex gap-[10px]">
            {TYPES.map(({ id, title }) => (
              <li
                key={id}
                className={`rounded-20 border px-3.5 py-1.5 text-center cursor-pointer max-h-[32px] hover:text-[#6B7280] hover:bg-[#F3F4F6] ${
                  type == title
                    ? "border-[#E6F5FF] bg-[#E6F5FF]"
                    : "border-gray-200"
                }`}
                onClick={()=>{setType(title)}}
              >
                <h6
                  className={`text-sm ${
                    type == title ? "text-[#0198FF]" : "text-gray-500"
                  }`}
                >
                  {title}
                </h6>
              </li>
            ))}
          </ul>
        </article>
        <article className="flex gap-4 items-center">
          <h6 className="text-sm text-[#111111]">Risk level</h6>
          <ul className="flex gap-[10px]">
            {RISKS.map(({ id, title }) => (
              <li
                key={id}
                className={`rounded-20 border px-3.5 py-1.5 text-center cursor-pointer max-h-[32px] hover:bg-[#F3F4F6] ${
                 riskLv === title
                    ? "border-[#E6F5FF] bg-[#E6F5FF]"
                    : "border-gray-200"
                }`}
                onClick={()=>{setRiskLv(title)}}
              >
                <h6
                  className={`text-sm ${
                    riskLv === title ? "text-[#0198FF]" : "text-gray-500"
                  }`}
                >
                  {title}
                </h6>
              </li>
            ))}
          </ul>
        </article>

        <Select defaultData={weather} data={WEATHERS} title={"Weather"} selectHandler={weatherHandler} />
      
      </section>
      <section className="ml-8 border-b border-gray-100 py-6 flex justify-between mr-8">

        <Select defaultData={loc} data={LOCATIONS} title={"Location"} selectHandler={locHandler} />
        <Select defaultData={exchg} data={EXCHAGNES} title={"Exchange"} selectHandler={exchgHandler} />
        <Select defaultData={sect} data={SECTROS} title={"Sector"} selectHandler={sectHandler} />

      </section>
      <section className="ml-8 py-6 flex gap-3">
        <article className="w-80 py-2.5 px-4 flex relative items-center border border-solid border-gray-200 rounded-20 hover:border-[#4B5563]">
          {/* <Image src={search} alt="search" className="mr-2 w-4 h-4 " /> */}
          <input
            placeholder="Search Name"
            className="outline-none text-sm h-[18px]"
            value={search}
            onChange={onSearch}
          />
                      <FaSearch className={`absolute right-5 text-gray-500`}></FaSearch>

        </article>
        <Select defaultData={limit} data={VIEWS} title={"Views"} selectHandler={rowHandler} />

        <button onClick={resetHandler}>
          <p className="text-[#0198ff] underline text-sm hover:bg-[#0085E6] disabled:bg-[#D1D5DB]">
            All reset
          </p>
        </button>
      </section>
    </main>

    {/* Main Table */}
        <div className="border-t-[5px] border-gray-100" />
        <main className="mb-7">
      <div className="max-w-1320 w-full mx-auto bg-white rounded-20 overflow-hidden">
        <table className="w-full">
          <colgroup>
            <col width="25%" />
            <col width="9%" />
            <col width="12%" />
            <col width="13%" />
            <col width="11%" />
            <col width="11%" />
            <col width="15%" />
            <col width="4%" />
          </colgroup>
          <thead className="border-gray-200 border-b-[1px]">
            <tr className="text-[14px] text-gray-600 h-11">
              <th className="text-left pl-8">Name</th>
              <th>Risk</th>
              <th>
                <div className="flex justify-center">
                  <p>Maximum loss</p>
                  <Image src={icon} onClick={lossOrderHandler} alt="" className="ml-1.5 cursor-pointer" />
                </div>
              </th>
              <th>
                <div className="flex justify-center">
                  Price
                  <Image src={icon} onClick={priceOrderHandler} alt="" className="ml-1.5 cursor-pointer" />
                </div>
              </th>
              <th>
                <div className="flex justify-center">
                  Price change
                  <Image src={icon} alt="" onClick={priceChgOrderHandler} className="ml-1.5 cursor-pointer" />
                </div>
              </th>
              <th>Risk chart</th>
              <th>Weather</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {assetList.map((asset) => (
              <Items name={asset['ITEM_ENG_NM']} ticker={asset['ITEM_CD_DL']} key={asset['ITEM_CD_DL']} riskLevel={asset['CVaR_LV']} maxLoss={asset['CVaRNTS']} price={asset['ADJ_CLOSE']} currency={asset['CURR']} priceChange={""} chartData={JSON.parse(asset['CHART'])} weather={asset['WTHR_ENG_NM']} weatherExplain={asset['WTHR_ENG_DL']}/>

            ))}
          </tbody>
          {/* <tbody>
            {array.map((data, i) => (
              <Item data={data} key={i} />

            ))}
          </tbody> */}
        </table>
        <Pagination
          total={rowCount}
          page={page}
          setPage={setPage}
          views={limit}
        />
      </div>
    </main>
      </div>
    </main>
  );
};

export default Explore;
