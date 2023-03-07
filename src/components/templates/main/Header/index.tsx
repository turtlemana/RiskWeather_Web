import { useState } from "react";

import { MENUS } from "datas/main";
import Carousel from "components/templates/main/Header/Carousel";

const Header = () => {
  const [index, setIndex] = useState(0);

  return (
    <main className="pt-[90px] relative h-[415px] w-full bg-backgroundColor bg-cover bg-no-repeat bg-center">
      <div className="z-[-1] absolute top-0 left-0 w-full h-full mx-auto bg-background bg-cover bg-no-repeat bg-center" />
      <h1 className="mb-[60px] text-center text-[40px] text-white">
        Check out Risk, before Invest
      </h1>
      <ul className="flex justify-center gap-2.5 mb-10">
        {MENUS.map(({ id, title }) => (
          <li
            key={id}
            className={`py-2 px-3 rounded-[36px] min-w-[46px] text-center cursor-pointer hover:bg-[#F3F4F6] hover:text-gray-400
            ${index === id ? "bg-black text-white" : "bg-white text-gray-400"}`}
            onClick={() => setIndex(id)}
          >
            <h5 className="h-5">{title}</h5>
          </li>
        ))}
      </ul>
      <Carousel list={MENUS[index].list} />
    </main>
  );
};

export default Header;
