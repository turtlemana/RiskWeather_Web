import executeQuery from "datas/mysql";


const handler=async(req:any,res:any)=>{
    const {search}=req.query

  
    try{
        
        const result:any=await executeQuery({

            query: `SELECT ITEM_CD_DL, ITEM_ENG_NM,CVaR_LV,WTHR_ENG_NM,WTHR_ENG_DL
            FROM RMS.ALL_ASSETS
            WHERE 1=1
            ${!search ? "" : `AND MATCH(ITEM_CD_DL, ITEM_ENG_NM) AGAINST("${search}" IN BOOLEAN MODE)`}
            ;`
        })

        res.status(200).json([...result])
    } catch(err){
        console.log(err)
        res.status(401).json({ message: "Can't find data" });
    }
}

export default handler;