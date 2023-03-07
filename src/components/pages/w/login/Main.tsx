import Link from "next/link";
import Image from "next/image";

import kakao from "assets/icons/login/kakao.svg";
import google from "assets/icons/login/google.svg";
import naver from "assets/icons/login/naver.svg";
import facebook from "assets/icons/login/facebook.svg";

const Login = () => {
  return (
    <main className="pt-[192px] pb-[144px] bg-white text-center shadow-[0_0_12px_0_rgba(121,120,132,0.15)]">
      <p className="text-4xl text-[#111111] font-medium mb-7">Welcome back!</p>
      <p className="text-gray-400 mb-10">Please log in on social media.</p>
      <section className="mb-7 max-w-[327px] mx-auto">
        <Link
          href="/login/assets"
          className="h-12 bg-[#FFCA42] flex items-center gap-3 justify-center text-sm font-semibold rounded-[60px]"
        >
          <Image src={kakao} alt="" />
          Continue with Kakao
        </Link>
        <Link
          href="/login/assets"
          className="my-3 h-12 bg-[#FFFFFF] flex items-center gap-3 justify-center text-sm font-semibold rounded-[60px] border border-gray-300"
        >
          <Image src={google} alt="" />
          Continue with Google
        </Link>
        <Link
          href="/login/assets"
          className="mb-3 h-12 bg-[#5AC451] flex items-center gap-3 justify-center text-sm font-semibold rounded-[60px]"
        >
          <Image src={naver} alt="" />
          Continue with Naver
        </Link>
        <Link
          href="/login/assets"
          className="h-12 bg-[#3975EA] flex items-center gap-3 justify-center text-sm font-semibold rounded-[60px]"
        >
          <Image src={facebook} alt="" />
          Continue with Facebook
        </Link>
      </section>
      <Link href="/login/business">
        <p className="text-gray-600 text-sm underline">
          Login with business account
        </p>
      </Link>
    </main>
  );
};

export default Login;
