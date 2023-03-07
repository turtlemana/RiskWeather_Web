import Link from "next/link";
import Image from "next/image";

import { CONTACTS, MENUS } from "datas/footer";
import logo from "assets/icons/footer/logo.png";

const Footer = () => {
  return (
    <footer className="pt-10 pb-[60px] border-t">
      <div className="gap-[86px] mx-auto">
        <Image src={logo} alt="logo" />
        <section className="">
          <h4 className="text-gray-600 mb-7 laptop:mb-5">Customer Service</h4>
          <ul className="gap-5 mb-2">
            {CONTACTS.map(({ id, title, content, border }) => (
              <li key={id} className="flex items-center gap-3">
                <p className="text-sm text-gray-400 w-[42px]">{title}</p>
                <p className="text-sm text-gray-800">{content}</p>
                {border && (
                  <div className="h-3 w-px border border-solid border-gray-200 ml-2" />
                )}
              </li>
            ))}
          </ul>
          <ul className="flex gap-5 text-gray-600 font-medium text-sm ">
            {MENUS.map(({ id, title, path }) => (
              <li key={id} className="w-[98px]">
                <Link href={path}>{title}</Link>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
