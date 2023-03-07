import { Dispatch, SetStateAction } from "react";
import Link from "next/link";
import Image from "next/image";

import coin from "assets/icons/login/coin.svg";
import profile from "assets/images/portfolio/profile.svg";
import pencil from "assets/icons/portfolio/pencil.svg";
import share from "assets/icons/portfolio/share.svg";
import moderate from "assets/icons/portfolio/moderate.svg";
import conservative from "assets/icons/portfolio/conservative.svg";
import moderatelyAggressive from "assets/icons/portfolio/moderatelyAggressive.svg";
import aggressive from "assets/icons/portfolio/aggressive.svg";
import { COINS } from "datas/login";

interface Props {
  setIsOpenProfileModal: Dispatch<SetStateAction<boolean>>;
}
const INVESTS = [
  { id: 0, title: "Conservative", image: conservative },
  { id: 1, title: "Moderately aggressive", image: moderatelyAggressive },
  { id: 2, title: "Moderate", image: moderate },
  { id: 3, title: "Aggressive", image: aggressive },
];

const Header = ({ setIsOpenProfileModal }: Props) => {
  const index = 1;

  return (
    <main className="py-8 px-10 bg-white max-w-1320 rounded-20 flex gap-[52px] mx-auto mb-10">
      <section className="flex gap-6 flex-1">
        <article className="relative w-[100px]">
          <Image src={profile} alt="" className="w-[100px] h-[100px]" />
          <Image
            src={pencil}
            alt=""
            className="absolute right-0 top-[70px] cursor-pointer"
            onClick={() => setIsOpenProfileModal(true)}
          />
        </article>
        <h6 className="text-[28px] text-[#111111] mt-4">Sam Kim</h6>
      </section>
      <section className="max-w-[283px] w-full">
        <article className="flex items-center mb-2.5">
          <h5 className="text-[#111111] flex-1">Risk Tolerance</h5>
          <Image src={share} alt="" className="cursor-pointer" />
        </article>
        <article className="flex gap-4 items-center border border-gray-200 rounded-20 py-2.5 px-3">
          <Image src={INVESTS[index].image} alt="" />
          <div>
            <h5 className="text-[#0198FF] text-sm mb-1">
              {INVESTS[index].title}
            </h5>
            <Link href="/login/assets">
              <p className="font-medium underline text-xs text-gray-400">
                Re-test
              </p>
            </Link>
          </div>
        </article>
      </section>
      <section className="w-full max-w-[586px]">
        <h1 className="text-[#111111] mb-3">Interested Assets</h1>
        <article className="flex gap-2 flex-wrap max-h-[80px] overflow-hidden">
          {COINS.map(({ id, name }) => (
            <div
              key={id}
              className="flex gap-1.5 items-center border border-gray-200 rounded-20 py-1.5 px-2 h-9"
            >
              <Image src={coin} alt="" className="w-6" />
              <p className="text-[#111111] text-xs font-medium mt-px">{name}</p>
            </div>
          ))}
        </article>
      </section>
    </main>
  );
};

export default Header;
