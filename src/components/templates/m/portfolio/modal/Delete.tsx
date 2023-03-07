import { Dispatch, SetStateAction } from "react";

interface Props {
  setIsOpenDeleteModal: Dispatch<SetStateAction<boolean>>;
}

const Delete = ({ setIsOpenDeleteModal }: Props) => {
  return (
    <main className="absolute text-center text-[#111111] bg-white py-12 px-8 rounded-20 top-1/2 left-1/2 translate-x-half translate-y-half border max-w-[415px] w-full">
      <h1 className="text-2xl mb-4">
        Are you sure you want to
        <br /> leave Riskweather?
      </h1>
      <p className="mb-9">All data will be delated</p>
      <section className="flex gap-[15px]">
        <button
          className="bg-gray-500 p-3 rounded-[60px] text-white font-medium flex-1"
          onClick={() => setIsOpenDeleteModal(false)}
        >
          Cancel
        </button>
        <button
          className="bg-[#0198FF] p-3 rounded-[60px] text-white font-medium flex-1 hover:bg-[#0085E6] disabled:bg-[#D1D5DB]"
          onClick={() => setIsOpenDeleteModal(false)}
        >
          <h1>Delete</h1>
        </button>
      </section>
    </main>
  );
};

export default Delete;
