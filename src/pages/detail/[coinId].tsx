import { NextPage } from "next";
import WebComponent from "components/pages/w/Detail";
import MobileComponent from "components/pages/m/Detail";

interface Props {
  isMobile: boolean;
}

const Detail: NextPage<Props> = ({ isMobile }) => {
  return isMobile ? <MobileComponent /> : <WebComponent />;
};

export default Detail;
