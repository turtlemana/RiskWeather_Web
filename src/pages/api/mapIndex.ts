import executeQuery from "datas/mysql";


const handler=async(req:any,res:any)=>{
    
    try{

        const result:any=await executeQuery({

            query: `SELECT al.*, cc.lst as CHART 
            FROM RMS.ALL_ASSETS al 
            LEFT JOIN(
                SELECT CONCAT('[', GROUP_CONCAT( jo ORDER BY jo), ']') lst, ITEM_CD
                FROM(
                    SELECT JSON_OBJECT('ticker', ITEM_CD, 'x', BASE_DT, 'y',CVaRNTS) jo , ITEM_CD
                    FROM RMS.RISK_IDX_TMP
                    WHERE STEP = 1 AND CL > 0.98 AND BASE_DT <= DATE_ADD(NOW(),INTERVAL -380 DAY) 
                    ) jocd
                GROUP BY ITEM_CD
                ) cc
            ON cc.ITEM_CD = al.ITEM_CD 
            WHERE 1=1 AND ITEM_CD_DL IN ("^BVSP","^NSEI","399001.SZ","ENX.PA","^IXIC","^KS11","^N225","^GDAXI","^AEX","^TWII","^FTSE","^SSMI","^BFX","FTSEMIB.MI","^IBEX","^ATX","EXAE.AT","OSEBX.OL","^OMXC25","^OMXH25","^ISEQ","^NZ50","^JKSE","S68.SI","BOLSAA.MX","BVC.CL","JSE.JO")
       
            ORDER BY VOLUME
            ;`
        })

        res.status(200).json([...result])
    } catch(err){
        console.log(err)
        res.status(401).json({ message: "Can't find data" });
    }
}

export default handler;