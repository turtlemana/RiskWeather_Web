import { NextPage } from "next";
import WebComponent from "components/pages/w/Membership";
import MobileComponent from "components/pages/m/Membership";

interface Props {
  isMobile: boolean;
}

const Membership: NextPage<Props> = ({ isMobile }) => {
  return isMobile ? <MobileComponent /> : <WebComponent />;
};

export default Membership;
