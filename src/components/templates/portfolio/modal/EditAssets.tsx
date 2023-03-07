import { Dispatch, SetStateAction, useState } from "react";
import Image from "next/image";

import close from "assets/icons/contact/close.svg";
import back from "assets/icons/portfolio/back.svg";
import checkbox from "assets/icons/portfolio/checkbox.svg";
import blueCheckbox from "assets/icons/portfolio/blueCheckbox.svg";
import bitcoin from "assets/icons/portfolio/coin.svg";
import { ASSETS } from "datas/portfolio";

interface Props {
  setIsOpenAddModal: Dispatch<SetStateAction<boolean>>;
}

const AddAssets = ({ setIsOpenAddModal }: Props) => {
  const [selectIndex, setSelectIndex] = useState<Number[]>([]);
  const handleSelect = (i: number) => {
    if (selectIndex.includes(i)) {
      const filtered = selectIndex.filter((data) => data !== i);
      return setSelectIndex(filtered);
    }
    return setSelectIndex([...selectIndex, i]);
  };

  return (
    <main className="absolute text-center text-[#111111] bg-white p-8 rounded-20 top-1/2 left-1/2 translate-x-half translate-y-half border max-w-[565px] w-full">
      <header className="flex mb-8">
        <section className="flex-1 flex">
          <Image
            src={back}
            alt=""
            className="cursor-pointer mr-4"
            onClick={() => setIsOpenAddModal(false)}
          />
          <button
            className="bg-gray-500 h-10 py-2.5 px-5 rounded-[60px] mr-2 text-white font-medium"
            onClick={() => setIsOpenAddModal(false)}
          >
            Cancel
          </button>
          <button
            className="bg-[#0198FF] h-10 py-2.5 px-5 rounded-[60px] text-white font-medium hover:bg-[#0085E6] disabled:bg-[#D1D5DB]"
            onClick={() => setIsOpenAddModal(false)}
          >
            <h1>Save</h1>
          </button>
        </section>
        <Image
          src={close}
          alt=""
          className="cursor-pointer"
          onClick={() => setIsOpenAddModal(false)}
        />
      </header>
      <section className="flex items-center border-gray-200 border-b py-3">
        <Image src={checkbox} alt="" className="mr-5" />
        <p className="text-sm text-gray-600 font-medium text-left w-[217px]">
          Name
        </p>
        <p className="text-sm text-gray-600 font-medium text-left w-[200px] mr-11">
          Quantity
        </p>
      </section>
      <section className="overflow-auto h-[260px] customScrollBar">
        {ASSETS.map(({ title, subTitle, quantity }, i) => (
          <article className="flex items-center py-3" key={quantity}>
            {selectIndex.includes(i) ? (
              <Image
                src={blueCheckbox}
                alt=""
                className="mr-5 cursor-pointer"
                onClick={() => handleSelect(i)}
              />
            ) : (
              <Image
                src={checkbox}
                alt=""
                className="mr-5 cursor-pointer"
                onClick={() => handleSelect(i)}
              />
            )}
            <div className="w-[217px] flex">
              <Image src={bitcoin} alt="" className="mr-3 w-10" />
              <div>
                <h6 className="mb-1">{title}</h6>
                <p className="text-gray-500 text-xs">{subTitle}</p>
              </div>
            </div>
            <input
              className="border w-[200px] py-2.5 px-3 rounded-20 max-h-10 text-sm text-[#111111] focus:border-[#4B5563] outline-none"
              placeholder="Portfolio Name"
              value={quantity.toLocaleString()}
            />
          </article>
        ))}
      </section>
    </main>
  );
};

export default AddAssets;
