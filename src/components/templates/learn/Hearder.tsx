const Header = () => {
  return (
    <main className="pt-[90px] relative h-[406px] w-full bg-black/[.28] px-5">
      <header className="z-[-1] absolute top-0 left-0 w-full h-full mx-auto bg-backgroundLearn bg-cover bg-no-repeat bg-center" />
      <section className="max-w-1320 mx-auto">
        <h1 className="mb-[72px] text-[40px] text-white">
          How to use Risk weather
        </h1>
        <h6 className="text-xl mb-7 text-white">Welcome to Risk weather!</h6>
        <p className="text-lg font-medium text-white">
          Risk weather measures the risks of various digital assets and show
          them like a weather forecast.
          <br />
          To intuitively understand the risks of my assets, let{`'`}s learn
          about Risk weather{`'`}s representation.
        </p>
      </section>
    </main>
  );
};

export default Header;
