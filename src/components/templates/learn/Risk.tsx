import Image from "next/image";

import graph from "assets/images/learn/graph.svg";

const Risk = () => {
  return (
    <section className="bg-white py-[100px] px-5">
      <article className="w-full max-w-1320 mx-auto flex items-center justify-between">
        <div>
          <h6 className="text-4xl text-[#111111] mb-10">Risk</h6>
          <div className="text-gray-600 text-lg max-w-[700px]">
            <p className="mb-8">
              자산의 수익률 분포는 정규분포와 유사한 형태를 보입니다.
              <br />
              기대 수익률 0을 중심으로 수익률은 +또는 -일 수 있으며, 그 크기가
              클수록 발생 확률은 낮아집니다.
            </p>
            <p>
              이때 분포의 왼쪽 끝 부분, 99% 신뢰수준에서 예상되는 기대 손실을
              “CVaR”라고 합니다.
            </p>
            <h1 className="text-[#001B7B]">
              서비스 모델에서는 CVaR를 자산의 리스크로 하여 자산과 포트폴리오의
              리스크 정보를 제공합니다.
            </h1>
          </div>
        </div>
        <Image src={graph} alt="" className="" />
      </article>
    </section>
  );
};

export default Risk;
