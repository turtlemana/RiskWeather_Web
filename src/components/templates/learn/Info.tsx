import Image from "next/image";

import card from "assets/images/learn/card2.svg";
import info from "assets/images/learn/info.svg";

const Info = () => {
  return (
    <section className="bg-white py-[100px] px-5">
      <h1 className="text-5xl text-[#001B7B] mb-[120px] mx-auto w-fit">
        일반 투자자들도 이해하기 쉬운 Risk 정보 제공​
      </h1>
      <article className="w-full max-w-1320 mx-auto flex items-center justify-between mb-[60px]">
        <div>
          <h6 className="text-4xl text-[#111111] mb-10">
            위험에 대한 일기예보​
          </h6>
          <div className="mb-8 text-gray-600 text-lg max-w-[504px]">
            NTS-ARMA-GARCH 모형을 통해 도출한 리스크와 정규분포를 가정하여
            도출한 리스크 간의 차이를 “Tail Risk”라 합니다. <br />
            Tail Risk가 커질 때 시장의 리스크도 커지는 경향이 있습니다.
            <h1 className="text-[#001B7B] mb-8">
              즉 Tail Risk는 미래의 리스크에 대한 일기예보 같은 역할을 합니다.
            </h1>
            Risk Weather는 자산의 Tail Risk를 측정한 후
            <span className="text-[#001B7B] font-bold mx-1">
              일기예보 처럼 날씨로 미래의 리스크를 표현합니다.
            </span>
            투자자는 날씨 정보를 통해 현재 시장이 어떻게 변하고 있는지 파악하고
            빠르게 대응할 수 있습니다.
          </div>
        </div>
        <Image src={card} alt="" />
      </article>
      <Image src={info} alt="" className="mx-auto" />
    </section>
  );
};

export default Info;
