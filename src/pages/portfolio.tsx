import { NextPage } from "next";
import WebComponent from "components/pages/w/Portfolio";
import MobileComponent from "components/pages/m/Portfolio";

interface Props {
  isMobile: boolean;
}

const Portfolio: NextPage<Props> = ({ isMobile }) => {
  return isMobile ? <MobileComponent /> : <WebComponent />;
};

export default Portfolio;
