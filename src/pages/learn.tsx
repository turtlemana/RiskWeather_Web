import { NextPage } from "next";
import WebComponent from "components/pages/w/Learn";
import MobileComponent from "components/pages/m/Learn";

interface Props {
  isMobile: boolean;
}

const Learn: NextPage<Props> = ({ isMobile }) => {
  return isMobile ? <MobileComponent /> : <WebComponent />;
};

export default Learn;
