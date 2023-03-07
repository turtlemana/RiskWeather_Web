import { NextPage } from "next";
import WebComponent from "components/pages/w/login/Assets";
import MobileComponent from "components/pages/m/login/Assets";

interface Props {
  isMobile: boolean;
}

const Assets: NextPage<Props> = ({ isMobile }) => {
  return isMobile ? <MobileComponent /> : <WebComponent />;
};

export default Assets;
