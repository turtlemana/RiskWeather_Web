import { DETAILS } from "datas/detail";

const Stock = () => {
  return (
    <main className="max-w-1320 mx-auto pt-8 rounded-20 bg-white my-7 pb-[18px]">
      <h1 className="ml-8 text-2xl text-[#111111] mb-7">Stock</h1>
      <ul className="max-h-[640px] overflow-scroll">
        {DETAILS.map(({ id, title, content, bold, underline }) => (
          <li
            key={id}
            className={`flex gap-5 py-[14px] ${
              id !== DETAILS.length - 1 && "border-b"
            }`}
          >
            <p className="w-[160px] pl-8 text-gray-400">{title}</p>
            <p
              className={`text-[#111111] flex-1 max-w-[404px] ${
                bold && "font-semibold"
              } pr-8 ${underline && "underline"}`}
            >
              {content}
            </p>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Stock;
