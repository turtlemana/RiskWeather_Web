import { useState } from "react";

import { MENUS } from "datas/main";
import Carousel from "components/templates/m/main/Header/Carousel";

const Header = () => {
  const [index, setIndex] = useState(0);

  return (
    <main className="pt-8 w-full">
      <h1 className="mb-7 text-center text-2xl">
        Check out Risk,
        <br />
        before Invest
      </h1>
      <ul className="flex justify-center gap-2.5 mb-10">
        {MENUS.map(({ id, title }) => (
          <li
            key={id}
            className={`py-2 px-2.5 rounded-20 text-center cursor-pointer border h-9 flex items-center
            ${
              index === id
                ? "bg-black text-white border-black"
                : "bg-white text-gray-400 border-gray-200"
            }`}
            onClick={() => setIndex(id)}
          >
            <h1 className="">{title}</h1>
          </li>
        ))}
      </ul>
      <Carousel list={MENUS[index].list} />
    </main>
  );
};

export default Header;
