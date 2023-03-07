import { MEMBERSHIPS } from "datas/membership";

const Membership = () => {
  return (
    <main className="pt-[108px] pb-[240px] px-5 bg-backgroundMembership bg-cover bg-no-repeat bg-center">
      <div className="mb-[120px] flex justify-center gap-2.5 text-[44px]">
        <h6 className="text-[#111111]">Find your</h6>
        <h6 className="text-[#0198FF] underline decoration-2">Membership</h6>
      </div>
      <ul className="flex justify-center gap-[30px]">
        {MEMBERSHIPS.map(({ id, title, price, request }) => (
          <li
            key={id}
            className="py-[60px] px-12 rounded-20 bg-white border border-gray-200 w-full max-w-[420px]"
          >
            <h6 className="text-4xl text-gray-600 mb-5">{title}</h6>
            <h1 className="text-[28px] text-[#111111] mb-[56px]">{price}</h1>
            <div className="flex gap-2.5 items-end mb-12">
              <h2 className="text-[#0198FF] text-3xl">{request}</h2>
              <p className="font-medium text-lg text-gray-800 mb-1">
                requests portfolio risk /day
              </p>
            </div>
            <button className="bg-[#0198FF] w-full py-3 rounded-[60px] hover:bg-[#0085E6] disabled:bg-[#D1D5DB]">
              <h3 className="text-white">{price}</h3>
            </button>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Membership;
