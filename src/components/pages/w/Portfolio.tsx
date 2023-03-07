import { useState } from "react";
import Image from "next/image";

import kakao from "assets/icons/portfolio/kakao.svg";
import Header from "components/templates/portfolio/Header";
import Profile from "components/templates/portfolio/modal/Profile";
import Delete from "components/templates/portfolio/modal/Delete";
import Chart from "components/templates/portfolio/Chart";
import Add from "components/templates/portfolio/modal/Add";
import Assets from "components/templates/portfolio/Assets";
import AddAssets from "components/templates/portfolio/modal/AddAssets";
import EditAssets from "components/templates/portfolio/modal/EditAssets";

const Portfolio = () => {
  const [isOpenProfileModal, setIsOpenProfileModal] = useState(false);
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);
  const [isOpenAddModal, setIsOpenAddModal] = useState(false);
  const [isOpenAddAssetsModal, setIsOpenAddAssetsModal] = useState(false);
  const [isOpenEditAssetsModal, setIsOpenEditAssetsModal] = useState(false);

  return (
    <main className="px-5 py-10 pb-[96px]">
      <Header setIsOpenProfileModal={setIsOpenProfileModal} />
      <section className="flex gap-5 max-w-1320 mb-7">
        <Chart setIsOpenAddModal={setIsOpenAddModal} />
        <Assets
          setIsOpenAddModal={setIsOpenAddAssetsModal}
          setIsOpenEditAssetsModal={setIsOpenEditAssetsModal}
        />
      </section>
      <section className="flex max-w-1320 bg-white rounded-20 py-6 px-8 items-center">
        <h1 className="text-2xl text-gray-900 flex-1">Customer Service</h1>
        <button className="flex gap-3 bg-[#FFCA42] rounded-[60px] py-[14px] w-[327px] justify-center">
          <Image src={kakao} alt="" />
          <p className="text-sm font-medium">Kakao Talk 1:1 Inquiry</p>
        </button>
      </section>

      {isOpenProfileModal && (
        <Profile
          setIsOpenProfileModal={setIsOpenProfileModal}
          setIsOpenDeleteModal={setIsOpenDeleteModal}
        />
      )}
      {isOpenDeleteModal && (
        <Delete setIsOpenDeleteModal={setIsOpenDeleteModal} />
      )}
      {isOpenAddModal && <Add setIsOpenAddModal={setIsOpenAddModal} />}
      {isOpenAddAssetsModal && (
        <AddAssets setIsOpenAddModal={setIsOpenAddAssetsModal} />
      )}
      {isOpenEditAssetsModal && (
        <EditAssets setIsOpenAddModal={setIsOpenEditAssetsModal} />
      )}
    </main>
  );
};

export default Portfolio;
