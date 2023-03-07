import Image from "next/image";

import card from "assets/images/learn/card.svg";

const WeatherCard = () => {
  return (
    <section className="bg-white py-[100px] px-5">
      <div className="max-w-1320 mx-auto">
        <h6 className="text-4xl text-[#111111] mb-[72px]">Weather Card</h6>
        <Image src={card} alt="" className="mx-auto" />
      </div>
    </section>
  );
};

export default WeatherCard;
