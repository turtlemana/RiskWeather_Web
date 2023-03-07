import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

import bell from "/public/images/icons/header/bell.png";
import logo from "/public/images/icons/header/logo.png";
import search from "assets/icons/header/search.png";
import { MENUS } from "datas/header";
import Modal from "components/layouts/TopBar/Modal";
import UserModal from "components/layouts/TopBar/UserModal";
import Contact from "components/templates/Contact";
import { FaSearch } from 'react-icons/fa';


const TopBar = () => {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isUserOpenModal, setIsUserOpenModal] = useState(false);
  const [isOpenContactModal, setIsOpenContactModal] = useState(false);

  return (
    <header className="bg-white h-16">
      <div className="max-w-1320 h-full mx-auto flex items-center justify-between w-full desktop:max-w-5xl desktop:px-3 laptop:max-w-3xl laptop:px-3">
        <section className="flex items-center">
          <Link href="/">
            <img
              src={`/images/icons/header/logo.png`}
              alt="logo"
              loading="eager"
              className="mr-10 cursor-pointer m-auto  h-auto desktop:w-44 desktop:mr-5 laptop:w-36 laptop:mr-5"
            />
          </Link>
          <article className="w-406 relative py-2.5 px-4 flex items-center border border-solid border-gray-200 rounded-20 hover:border-[#4B5563] desktop:w-72 laptop:w-36 laptop:h-9">
           
            <input
              placeholder="Search"
              className="outline-none laptop:text-sm laptop:w-full"
            />
          <FaSearch className={`absolute right-5 text-gray-500`}></FaSearch>

          </article>
        </section>
        <section className="flex items-center">
          <ul className="flex gap-9 text-gray-400 font-bold mr-14 desktop:gap-5 desktop:mr-7 laptop:mr-3 laptop:gap-3 laptop:text-sm">
            {MENUS.map(({ id, title, path }) => (
              <li key={id}>
                <Link
                  href={path}
                  className={`${path === router.asPath && "text-[#111111]"}`}
                >
                  {title}
                </Link>
              </li>
            ))}
          </ul>
          <div className="relative">
            <img
              src={'/images/icons/header/bell.png'}
              alt="bell"
              className="mr-6 w-6 h-6 cursor-pointer laptop:mr-3 "
              onClick={() => setIsOpenModal((prev) => !prev)}
            />
            {isOpenModal && <Modal onClose={() => setIsOpenModal(false)} />}
          </div>
          {isLogin ? (
            <div
              className="flex items-center"
              onClick={() => setIsUserOpenModal((prev) => !prev)}
            >
              <img
                src={'/images/icons/header/logo.png'}
                alt="profile"
                className="mr-6 w-8 h-8 rounded-full cursor-pointer laptop:mr-3"
              />
              {isUserOpenModal && (
                <UserModal
                  onClose={() => setIsUserOpenModal((prev) => !prev)}
                  onLogout={() => setIsLogin(false)}
                  onOpenContactModal={() => setIsOpenContactModal(true)}
                />
              )}
              {isOpenContactModal && (
                <Contact onClose={() => setIsOpenContactModal(false)} />
              )}
            </div>
          ) : (
            <button
              className="text-[#111111] laptop:text-sm"
              onClick={() => setIsLogin(true)}
            >
              Login
            </button>
          )}
        </section>
      </div>
    </header>
  );
};

export default TopBar;
