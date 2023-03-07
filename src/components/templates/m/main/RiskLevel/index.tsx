import { useState } from "react";

import { RISK_LEVELS, TRENDING_LIST } from "datas/main";
import Card from "components/templates/main/RiskLevel/Card";

const RiskLevel = () => {
  const [selectItem, setSelectItem] = useState("VeryHigh");

  return (
    <main className="mb-7 px-5">
      <div className="p-8 max-w-1320 w-full mx-auto bg-white rounded-20 overflow-auto">
        <article className="flex justify-between mb-10">
          <h1 className="text-[28px] text-[#111111]">Risk Level</h1>
        </article>
        <ul className="mb-7 flex gap-2.5">
          {RISK_LEVELS.map(({ id, title }) => (
            <li
              key={id}
              className={`py-2 px-3 rounded-[36px] text-center cursor-pointer ${
                selectItem === title
                  ? "bg-black text-white"
                  : "border border-gray-200 bg-white text-gray-400"
              }`}
              onClick={() => setSelectItem(title)}
            >
              <h5 className="h-5">{title}</h5>
            </li>
          ))}
        </ul>
        <div className="flex">
          {TRENDING_LIST.map(
            (data) =>
              selectItem === data.risk && <Card key={data.id} data={data} />
          )}
        </div>
      </div>
    </main>
  );
};

export default RiskLevel;
