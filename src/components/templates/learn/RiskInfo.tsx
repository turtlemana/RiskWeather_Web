import Image from "next/image";

import info2 from "assets/images/learn/info2.svg";

const RiskInfo = () => {
  return (
    <section className="bg-white py-[100px] px-5">
      <h1 className="text-4xl text-[#111111] mb-10 mx-auto w-fit">
        직관적인 RISK 관련 정보 제공​
      </h1>
      <article className="w-full max-w-1320 mx-auto mb-[60px]">
        <div className="mx-auto text-center w-fit text-gray-600 text-lg mb-[76px]">
          <div className="mb-8">
            <h1 className="text-[#001B7B]">
              전세계의 주식과 코인 등 2000개 자산에 대한 리스크 정보를
              직관적으로 파악할 수 있습니다.
            </h1>
            1일 동안 발생 가능한 최대 손실을
            <span className="text-[#DF1525] font-bold mx-1">
              “Maximum loss”
            </span>
            로 보기 쉽게 제공합니다.
          </div>
          <p>
            또한 2000개 자산 전체의 리스크 분포와 특정 자산의 리스크를 비교하여
            자산 별 내재 리스크 등급을 제공합니다.{" "}
          </p>
          <h1 className="text-[#001B7B]">
            개별 자산의 리스크 등급을 통해 투자자는 자산의 리스크 특성을 한눈에
            파악할 수 있습니다.
          </h1>
        </div>
        <Image src={info2} alt="" className="mx-auto" />
      </article>
    </section>
  );
};

export default RiskInfo;
