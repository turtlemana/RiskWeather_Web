import { useState,useEffect,useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

// import bell from "/public/images/icons/header/bell.png";
// import logo from "/public/images/icons/header/logo.png";
import { MENUS } from "datas/header";
import Modal from "components/layouts/TopBar/Modal";
import UserModal from "components/layouts/TopBar/UserModal";
import Contact from "components/templates/Contact";
import { FaSearch } from 'react-icons/fa';
import useSWR from 'swr';
import axios from 'axios';
import { COLORS } from "datas/main";



interface Props{
  search:string | undefined;
  onSearch: any;
  searchList: any;
}




const TopBar = ({search,onSearch,searchList}:Props) => {

  const router = useRouter();
  const [searchActive,setSearchActive]=useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isUserOpenModal, setIsUserOpenModal] = useState(false);
  const [isOpenContactModal, setIsOpenContactModal] = useState(false);
  console.log(searchList)
  const resultList=useMemo(()=>{
    let tmpList=[...searchList]
    return tmpList
  },[searchList])

  console.log('rslist',resultList)
  

  return (
    <header className="bg-white h-16">
      <div className="max-w-1320 h-full mx-auto flex items-center justify-between w-full desktop:max-w-5xl desktop:px-3 laptop:max-w-3xl laptop:px-3">

        <section className="flex items-center">
          <Link href="/">
            <img
              src={`/images/icons/header/logo.png`}
              alt="logo"
              loading="eager"
              className="mr-10 cursor-pointer m-auto  h-auto desktop:w-44 desktop:mr-5 laptop:w-36 laptop:mr-5"
            />
          </Link>
          <div className="flex-row">
          <article className="relative w-406 py-2.5 px-4 flex items-center border border-solid border-gray-200 rounded-20 hover:border-[#4B5563] desktop:w-72 laptop:w-36 laptop:h-9">
           
            <input
              placeholder="Search"
              className="outline-none laptop:text-sm laptop:w-full"
              value={search}
              onChange={onSearch}
              onFocus={()=>{setSearchActive(true)}}
              onBlur={()=>{setSearchActive(false)}}
            />
          <FaSearch className={`absolute right-5 text-gray-500`}></FaSearch>

          </article>
          {resultList.length>=1 && searchActive  ? 
          
      <div className="absolute top-[58px]  w-[478px] max-h-[259px] bg-white z-20 py-[6px] px-5 overflow-auto customScrollBar rounded-20">
          {resultList?.map((asset:any)=>
          <article key={asset['ITEM_ENG_NM']} onClick={()=>{router.push({pathname:`/detail/${asset['ITEM_CD_DL']}`})}}  className="flex items-center cursor-pointer">
            
              <section className="flex items-center py-[10px] flex-1">
            <img loading="eager" src={`/images/logos/${asset['ITEM_CD_DL']}.png`} alt="logo" className="h-10 mr-3"/>
            <div>
            <h6 className={'text-sm'}>{asset['ITEM_ENG_NM']}</h6>
            <p className="text-gray-500 text-xs">{asset['ITEM_CD_DL']}</p>
            </div>
            </section>
            <section className={`h-6 py-1 px-3 rounded-20 text-xs font-semibold ${COLORS[asset['CVaR_LV']]}`}>
            <p className={"mt-px"}>{asset['CVaR_LV']}</p>
            </section>
            {/* <div className="rounded-20 bg-gray-100 py-[2px] pl-3 pr-4  mx-auto flex items-center  "> */}

            <Image src={`/images/weather/${asset['WTHR_ENG_NM']}.svg`} width={0} height={0} alt="weather" className="w-6 h-6 ml-4"/>
            {/* <p className="text-xs text-gray-600 font-medium">{asset['WTHR_ENG_DL']}</p> */}
            {/* </div> */}
          </article>)}
          </div> : ""}
          </div>

        </section>

        <section className="flex items-center">
          <ul className="flex gap-9 text-gray-400 font-bold mr-14 desktop:gap-5 desktop:mr-7 laptop:mr-3 laptop:gap-3 laptop:text-sm">
            {MENUS.map(({ id, title, path }) => (
              <li key={id}>
                <Link
                  href={path}
                  className={`${path === router.asPath && "text-[#111111]"}`}
                >
                  {title}
                </Link>
              </li>
            ))}
          </ul>
          <div className="relative">
            <img
              src={'/images/icons/header/bell.png'}
              alt="bell"
              className="mr-6 w-6 h-6 cursor-pointer laptop:mr-3 "
              onClick={() => setIsOpenModal((prev) => !prev)}
            />
            {isOpenModal && <Modal onClose={() => setIsOpenModal(false)} />}
          </div>
          {isLogin ? (
            <div
              className="flex items-center"
              onClick={() => setIsUserOpenModal((prev) => !prev)}
            >
              <img
                src={'/images/icons/header/logo.png'}
                alt="profile"
                className="mr-6 w-8 h-8 rounded-full cursor-pointer laptop:mr-3"
              />
              {isUserOpenModal && (
                <UserModal
                  onClose={() => setIsUserOpenModal((prev) => !prev)}
                  onLogout={() => setIsLogin(false)}
                  onOpenContactModal={() => setIsOpenContactModal(true)}
                />
              )}
              {isOpenContactModal && (
                <Contact onClose={() => setIsOpenContactModal(false)} />
              )}
            </div>
          ) : (
            <button
              className="text-[#111111] laptop:text-sm"
              onClick={() => setIsLogin(true)}
            >
              Login
            </button>
          )}
        </section>
      </div>
    
    </header>
  );
};

export default TopBar;
