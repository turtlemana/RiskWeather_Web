import { Dispatch, SetStateAction, useState } from "react";
import Image from "next/image";

import close from "assets/icons/contact/close.svg";
import profile from "assets/images/portfolio/profile.svg";
import camera from "assets/icons/portfolio/camera.svg";
import arrow from "assets/icons/explore/arrow.svg";
import blueArrow from "assets/icons/explore/blueArrow.svg";

interface Props {
  setIsOpenProfileModal: Dispatch<SetStateAction<boolean>>;
  setIsOpenDeleteModal: Dispatch<SetStateAction<boolean>>;
}

const DATAS = [
  { id: 0, title: "South Korea" },
  { id: 1, title: "Japan" },
  { id: 2, title: "China" },
];

const Profile = ({ setIsOpenProfileModal, setIsOpenDeleteModal }: Props) => {
  const [isActive, setIsActive] = useState(false);
  const [index, setIndex] = useState(0);
  return (
    <main className="absolute bg-white p-8 rounded-20 top-1/2 left-1/2 translate-x-half translate-y-half border max-w-[415px]">
      <header className="flex mb-5">
        <h1 className="text-2xl flex-1">Profile</h1>
        <Image
          src={close}
          alt=""
          className="mb-1 cursor-pointer"
          onClick={() => setIsOpenProfileModal(false)}
        />
      </header>
      <section>
        <article className="relative w-[100px] mb-6">
          <Image src={profile} alt="" />
          <Image
            src={camera}
            alt=""
            className="absolute right-0 bottom-0 cursor-pointer"
          />
        </article>
        <article className="mb-4 flex items-center">
          <p className="text-sm w-[78px] text-gray-500 font-medium">Name</p>
          <input
            value="Sam Kim"
            className="bg-gray-100 border border-gray-200 rounded-20 px-3 py-2.5 w-[273px] text-sm h-10 text-gray-500"
            disabled
          />
        </article>
        <article className="mb-10 flex items-center">
          <p className="text-sm w-[78px] text-gray-500 font-medium">Country</p>
          <article className="flex gap-4 items-center relative justify-between min-w-80">
            <div
              onClick={() => setIsActive(!isActive)}
              className={`cursor-pointer border rounded-20 w-[273px] max-h-10 py-2 px-3.5 flex justify-between ${
                isActive ? "border-[#0198FF]" : "border-gray-200 "
              } `}
            >
              <p
                className={`text-sm ${
                  isActive ? "text-[#0198FF]" : "text-gray-600"
                }`}
              >
                {DATAS[index].title}
              </p>
              {isActive ? (
                <Image src={blueArrow} alt="" />
              ) : (
                <Image src={arrow} alt="" />
              )}
            </div>
            {isActive && (
              <div
                className={`z-10 absolute top-11 right-0 bg-white py-3 px-2 border-gray-200 border rounded-20 shadow-[0_0_12px_0_rgba(121,120,132,0.15)] ${"w-[273px]"}`}
              >
                {DATAS.map(({ id, title }) => (
                  <div
                    key={id}
                    className={`flex gap-2 px-3 py-1.5 cursor-pointer`}
                    onClick={() => {
                      setIndex(id);
                      setIsActive(false);
                    }}
                  >
                    <h6
                      className={`text-sm mt-px ${
                        index === id ? "text-[#0198FF]" : "text-gray-500"
                      }`}
                    >
                      {title}
                    </h6>
                  </div>
                ))}
              </div>
            )}
          </article>
        </article>
      </section>
      <button
        className="bg-[#0198FF] w-full p-3 rounded-[60px] text-white font-bold w-[351px] mb-6 hover:bg-[#0085E6] disabled:bg-[#D1D5DB]"
        onClick={() => setIsOpenProfileModal(false)}
      >
        Save
      </button>
      <div
        className="text-[#868686] text-center text-sm underline cursor-pointer"
        onClick={() => {
          setIsOpenProfileModal(false);
          setIsOpenDeleteModal(true);
        }}
      >
        Delete the account
      </div>
    </main>
  );
};

export default Profile;
