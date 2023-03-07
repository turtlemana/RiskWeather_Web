import { Dispatch, SetStateAction, useState } from "react";
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

const DEFAULT_STATE = { type: 0, risk: 0, viewItems: 0 };

const Top = ({ setViews }: { setViews: Dispatch<SetStateAction<number>> }) => {
  const [state, setState] = useState(DEFAULT_STATE);
  const [isActive, setIsActive] = useState(false);
  const [weather, setWeather] = useState([0]);
  const [location, setLocation] = useState([0]);
  const [exchange, setExchange] = useState([0]);
  const [sector, setSector] = useState([0]);
  const handleReset = () => {
    setState(DEFAULT_STATE);
    setWeather([0]);
    setLocation([0]);
    setExchange([0]);
    setSector([0]);
    setViews(20);
  };

  return (
    <main className="max-w-1320 w-full">
      <section className="ml-8 border-b border-gray-100 pb-6 flex justify-between mr-8">
        <article className="flex gap-4 items-center w-80 justify-between">
          <h6 className="text-sm text-[#111111]">Type</h6>
          <ul className="flex gap-[10px]">
            {TYPES.map(({ id, title }) => (
              <li
                key={id}
                className={`rounded-20 border px-3.5 py-1.5 text-center cursor-pointer max-h-[32px] hover:text-[#6B7280] hover:bg-[#F3F4F6] ${
                  state.type === id
                    ? "border-[#E6F5FF] bg-[#E6F5FF]"
                    : "border-gray-200"
                }`}
                onClick={() => setState({ ...state, type: id })}
              >
                <h6
                  className={`text-sm ${
                    id === state.type ? "text-[#0198FF]" : "text-gray-500"
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
                  state.risk === id
                    ? "border-[#E6F5FF] bg-[#E6F5FF]"
                    : "border-gray-200"
                }`}
                onClick={() => setState({ ...state, risk: id })}
              >
                <h6
                  className={`text-sm ${
                    id === state.risk ? "text-[#0198FF]" : "text-gray-500"
                  }`}
                >
                  {title}
                </h6>
              </li>
            ))}
          </ul>
        </article>
        <MultiSelect
          array={weather}
          setArray={setWeather}
          data={WEATHERS}
          title={"Weather"}
        />
      </section>
      <section className="ml-8 border-b border-gray-100 py-6 flex justify-between mr-8">
        <MultiSelect
          array={location}
          setArray={setLocation}
          data={LOCATIONS}
          title={"Location"}
        />
        <MultiSelect
          array={exchange}
          setArray={setExchange}
          data={EXCHAGNES}
          title={"Exchange"}
          isLarge={true}
        />
        <MultiSelect
          array={sector}
          setArray={setSector}
          data={SECTROS}
          title={"Sector"}
          isMidium={true}
        />
      </section>
      <section className="ml-8 py-6 flex gap-3">
        <article className="w-80 py-2.5 px-4 flex items-center border border-solid border-gray-200 rounded-20 hover:border-[#4B5563]">
          <Image src={search} alt="search" className="mr-2 w-4 h-4 " />
          <input
            placeholder="Search Name"
            className="outline-none text-sm h-[18px]"
          />
        </article>
        <article className="flex gap-4 items-center relative justify-between min-w-80">
          <div
            onClick={() => setIsActive(!isActive)}
            className={`cursor-pointer border rounded-20 w-[150px] max-h-10 py-2 px-3.5 flex justify-between ${
              isActive ? "border-[#0198FF]" : "border-gray-200 "
            } `}
          >
            <p
              className={`text-sm ${
                isActive ? "text-[#0198FF]" : "text-gray-600"
              }`}
            >
              {VIEWS[state.viewItems].title}
            </p>
            {isActive ? (
              <Image src={blueArrow} alt="" />
            ) : (
              <Image src={arrow} alt="" />
            )}
          </div>
          {isActive && (
            <div
              className={`z-10 absolute top-11 right-0 bg-white py-3 px-2 border-gray-200 border rounded-20 shadow-[0_0_12px_0_rgba(121,120,132,0.15)] ${"w-[150px]"}`}
            >
              {VIEWS.map(({ id, title, content }) => (
                <div
                  key={id}
                  className={`flex gap-2 px-3 py-1.5 cursor-pointer`}
                  onClick={() => {
                    setState({ ...state, viewItems: id });
                    setViews(content);
                    setIsActive(false);
                  }}
                >
                  <h6
                    className={`text-sm mt-px ${
                      state.viewItems === id
                        ? "text-[#0198FF]"
                        : "text-gray-500"
                    }`}
                  >
                    {title}
                  </h6>
                </div>
              ))}
            </div>
          )}
        </article>
        <button className="max-h-10 py-2.5 px-5 bg-[#0198ff] rounded-20 mr-2 hover:bg-[#0085E6]">
          <h1 className="text-white text-sm">Search</h1>
        </button>
        <button onClick={handleReset}>
          <p className="text-[#0198ff] underline text-sm hover:bg-[#0085E6] disabled:bg-[#D1D5DB]">
            All reset
          </p>
        </button>
      </section>
    </main>
  );
};

export default Top;
