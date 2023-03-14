import { NextPage } from "next";
import WebComponent from "components/pages/w/Detail";
import MobileComponent from "components/pages/m/Detail";

interface Props {
  isMobile: boolean;
  detailData:any;
}

const Detail: NextPage<Props> = ({ isMobile,detailData }) => {
  console.log(detailData)
  return isMobile ? <MobileComponent /> : <WebComponent detailData={detailData}/>;
};

export default Detail;


export async function getServerSideProps(context:any) {
   

  // const res = await axios.get(`http://localhost:8000`)
  const res= await 
      fetch(`http://localhost:3000/api/detail/${context.query.ticker}`);
  // const data=JSON.stringify(res)
  console.log(res)
  const detailDat= await res.json()
  const detailData=detailDat[0]
  return { props: {detailData} };

      
}

  