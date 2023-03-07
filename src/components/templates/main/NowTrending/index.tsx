import { useState } from "react";

import { TRENDING_LIST, TRENDING_MENUS } from "datas/main";
import Item from "components/templates/main/NowTrending/Item";

const NowTrending = () => {
  const [index, setIndex] = useState(0);

  return (
    <main className="mb-7 px-5">
      <div className="max-w-1320 w-full mx-auto bg-white rounded-20 overflow-hidden">
        <article className="flex justify-between p-8 mb-2">
          <h1 className="text-[28px] text-[#111111]">Now Trending</h1>
          <p className="text-sm text-[#6B7280]"> 2023.01.05 2:15:02</p>
        </article>
        <article className="pl-8 mb-7 flex gap-6">
          {TRENDING_MENUS.map(({ id, title }) => (
            <h2
              key={id}
              className={`cursor-pointer ${
                index === id ? "text-black" : "text-gray-300"
              }`}
              onClick={() => setIndex(id)}
            >
              {title}
            </h2>
          ))}
        </article>
        <table className="w-full">
          <colgroup>
            <col width="5%" />
            <col width="25%" />
            <col width="16%" />
            <col width="16%" />
            <col width="16%" />
            <col width="22%" />
          </colgroup>
          <thead className="border-gray-200 border-b-[1px]">
            <tr className="text-[14px] text-gray-600 h-11">
              <th></th>
              <th className="text-left">Name</th>
              <th>Risk</th>
              <th>Maximum loss</th>
              <th>Risk chart</th>
              <th>Weather</th>
            </tr>
          </thead>
          <tbody>
            {TRENDING_LIST.map((data) => (
              <Item data={data} key={data.id} />
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
};

export default NowTrending;
