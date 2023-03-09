import { NextPage } from "next";
import WebComponent from "components/pages/w/Main";
import MobileComponent from "components/pages/m/Main";
import {useState} from 'react'

interface Props {
  isMobile: boolean;

}

const Main: NextPage<Props> = ({isMobile}) => {
  return isMobile ? <MobileComponent /> : <WebComponent  />;
};

export default Main;


