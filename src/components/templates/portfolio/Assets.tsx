import { Dispatch, SetStateAction } from "react";
import Image from "next/image";

import plus from "assets/icons/portfolio/plus.svg";
import pen from "assets/icons/portfolio/pen.svg";
import bitcoin from "assets/icons/portfolio/coin.svg";
import { ASSETS } from "datas/portfolio";

interface Props {
  setIsOpenAddModal: Dispatch<SetStateAction<boolean>>;
  setIsOpenEditAssetsModal: Dispatch<SetStateAction<boolean>>;
}

const Assets = ({ setIsOpenAddModal, setIsOpenEditAssetsModal }: Props) => {
  return (
    <main className="rounded-20 max-w-[650px] max-h-[822px] flex-1 overflow-hidden">
      <section className="flex items-center bg-white py-8 px-8">
        <h1 className="text-2xl flex-1">Your Assets</h1>
        <div
          className="flex items-center py-2 px-3 border rounded-[36px] h-10 cursor-pointer border-gray-200 text-gray-400 gap-2 mr-4"
          onClick={() => setIsOpenAddModal(true)}
        >
          <h1 className="mt-1">Add Assets</h1>
          <Image src={plus} alt="" />
        </div>
        <Image
          src={pen}
          alt=""
          className="cursor-pointer"
          onClick={() => setIsOpenEditAssetsModal(true)}
        />
      </section>
      <section className="flex py-3 px-8 text-gray-600 justify-between w-full text-sm font-medium">
        <p className="w-[191px]">Name</p>
        <p className="w-[120px] text-center">Quantity</p>
        <p className="w-[195px] text-center">Price</p>
      </section>
      <section className="bg-white pt-3 px-8 h-full overflow-y-scroll customScrollBar">
        {ASSETS.length !== 0 ? (
          ASSETS.map(({ title, subTitle, quantity, price }, i) => (
            <div key={i}>
              <article className="flex justify-between items-center">
                <div className="w-[191px] flex">
                  <Image src={bitcoin} alt="" className="mr-5" />
                  <div>
                    <h6 className="mb-1">{title}</h6>
                    <p className="text-gray-500 text-xs">{subTitle}</p>
                  </div>
                </div>
                <p className="text-[#111111] w-[120px] text-center">
                  {quantity.toLocaleString()}
                </p>
                <p className="text-[#111111] w-[191px] text-center">
                  {price.toLocaleString()}
                </p>
              </article>
              <div className="h-px bg-gray-100 my-3 w-full" />
            </div>
          ))
        ) : (
          <p className="w-full h-full flex py-[293px] justify-center font-medium text-sm text-[#111111]">{`you have no asset for 'Portfolio3'`}</p>
        )}
      </section>
    </main>
  );
};

export default Assets;
