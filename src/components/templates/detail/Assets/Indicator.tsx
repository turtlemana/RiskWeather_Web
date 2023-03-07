interface Props {
  total: number;
  page: number;
  setPage: (e: number) => void;
}

const Indicator = ({ total, page, setPage }: Props) => {
  const pageLimit = 10;
  const startPage =
    parseInt((page - 1) / (pageLimit + 1) + "") * (pageLimit + 1) + 1;
  const numPages = Math.ceil(total / 4);
  const endPage =
    startPage + pageLimit > numPages ? numPages : startPage + pageLimit;
  const pageArray = [];
  for (let i = startPage; i <= endPage; i++) {
    pageArray.push(i);
  }

  return (
    <main className="w-full flex justify-center">
      <div className="flex items-center min-w-[350px] mt-10 mx-auto">
        <div className="flex justify-around mx-auto gap-2">
          {pageArray.map((i) => (
            <div
              key={i}
              onClick={() => setPage(i)}
              className={`flex justify-center items-center w-2 h-2 rounded-[50%] bg-[#E5E7EB] cursor-pointer ${
                page === i && "bg-gray-rgba"
              }`}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Indicator;
