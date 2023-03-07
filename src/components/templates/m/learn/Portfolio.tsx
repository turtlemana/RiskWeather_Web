import Image from "next/image";

import portfolio from "assets/images/learn/portfolio.svg";
import portfolio2 from "assets/images/learn/portfolio2.svg";

const Portfolio = () => {
  return (
    <section className="bg-white py-[100px] px-5">
      <h1 className="text-5xl text-[#001B7B] mb-[120px] mx-auto w-fit">
        효과적인 자산관리
      </h1>
      <article className="w-full max-w-1320 mx-auto mb-[60px]">
        <h1 className="text-4xl text-[#111111] mb-10 mx-auto w-fit">
          포트폴리오를 통한 RISK 관리​
        </h1>
        <div className="mx-auto text-center w-fit text-gray-600 text-lg mb-[100px]">
          <div className="mb-8">
            투자자는 Crypto, Stock, Index가 함께 포함된 포트폴리오를 구성하고,
            개별 자산 뿐만 아니라 포트폴리오에 대한 리스크 정보도 함께 제공받을
            수 있습니다.
            <br /> 또한 현재 포트폴리오의 리스크가 최소화 되도록 자산을 관리하는
            “포트폴리오 리밸런싱” 서비스를 준비중에 있습니다.
            <h1 className="text-[#001B7B]">
              이를 통해, 투자자는 투자하고 있는 전체 자산 포트폴리오의 리스크를
              효과적으로 관리할 수 있습니다.
            </h1>
          </div>
        </div>
        <div className="flex text-right text-xl text-gray-400">
          <div>
            <Image src={portfolio} alt="" className="mb-10" />
            <p className="mr-3">Portfolio</p>
          </div>
          <div className="text-right">
            <Image src={portfolio2} alt="" className="mb-10" />
            <p className="mr-3">Assets</p>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Portfolio;
