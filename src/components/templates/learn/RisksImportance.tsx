import Image from "next/image";

import risk from "assets/images/learn/risk.svg";

const RisksImportance = () => {
  return (
    <section className=" bg-white py-[100px] px-5">
      <article className="w-full max-w-1320 mx-auto flex items-center justify-between">
        <Image src={risk} alt="" />
        <div>
          <h6 className="text-4xl text-[#111111] mb-10">Risk 의 중요성</h6>
          <div className="text-gray-600 text-lg max-w-[613px]">
            <p className="mb-8">
              10%의 수익률이 기대되는 자산 A와 7%의 수익률이 기대되는 자산 B가
              있다면, <br /> 대부분 A에 투자할 것입니다.
            </p>
            <p className="mb-8">
              하지만 10%의 수익률과 함께 최대 90%의 손실을 볼 수 있는 자산 A와
              7%의 수익률과 함께 최대 50%의 손실을 볼 수 있는 자산 B가 있다면
              B에 투자하는 것이 합리적입니다.​
            </p>
            <h1 className="text-[#001B7B]">
              이처럼 자산의 수익률 만큼이나 중요한 것이 자산의 리스크입니다.
            </h1>
            <p>
              그러나 일반 투자자들이 리스크에 대한 정보를 얻는 것은 쉽지
              않습니다. <br />
              Risk weather에서는 투자자에게 자산의 리스크에 대한 정보를 쉽고
              빠르게 전달합니다.
            </p>
          </div>
        </div>
      </article>
    </section>
  );
};

export default RisksImportance;
