import { NextPage } from "next";
import WebComponent from "components/pages/w/Main";
import MobileComponent from "components/pages/m/Main";
import {useState} from 'react'

interface Props {
  isMobile: boolean;
  indexData:any;

}

const Main: NextPage<Props> = ({isMobile,indexData}) => {
  return isMobile ? <MobileComponent /> : <WebComponent  indexData={indexData}/>;
};

export default Main;

export async function getServerSideProps(context:any) {
   

  // const res = await axios.get(`http://localhost:8000`)
  const res= await 
      fetch(`http://localhost:3000/api/mapIndex`);
  // const data=JSON.stringify(res)
  console.log(res)
  const indexData= await res.json()
  
  return { props: {indexData} };

      
}

