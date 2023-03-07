import { NextPage } from "next";
import WebComponent from "components/pages/w/login/Main";
import MobileComponent from "components/pages/m/login/Main";

interface Props {
  isMobile: boolean;
}

const Main: NextPage<Props> = ({ isMobile }) => {
  return isMobile ? <MobileComponent /> : <WebComponent />;
};

export default Main;
