import Image from "next/image";

import profile from "assets/images/learn/profile.svg";

const Profile = () => {
  return (
    <section className="bg-white pt-[100px] pb-[200px] px-5">
      <h1 className="text-4xl text-[#111111] mb-10 mx-auto w-fit">
        투자성향 파악
      </h1>
      <article className="w-full max-w-1320 mx-auto mb-[60px]">
        <div className="mx-auto text-center w-fit text-gray-600 text-lg mb-[100px]">
          <p className="mb-8">
            투자자는 관심있는 자산들을 선택하여 자신의 투자 성향을 파악할 수
            있습니다.
          </p>
          <p>
            투자자가 선택한 관심 자산들로 구성된 포트폴리오의 리스크를 산출하여
            투자자의 투자 성향 정보를 제공합니다.
          </p>
          <h1 className="text-[#001B7B]">
            투자자는 관심 자산을 선택하기만 해도 자신의 투자 성향을 파악하고
            적절한 투자 전략을 세울 수 있습니다.
          </h1>
        </div>
        <Image src={profile} alt="" className="mx-auto" />
      </article>
    </section>
  );
};

export default Profile;
