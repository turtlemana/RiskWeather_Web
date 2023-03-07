import executeQuery from "datas/mysql";


const handler=async(req:any,res:any)=>{
    const {page,limit,loc,sect,weather,exchg,search,type,riskLv,priceOrder,lossOrder,priceChgOrder}=req.query

    console.log(search)
    
    // const queryData=await executeQuery({query:'SELECT COUNT(ITEM_CD) FROM RMS.ITEM_INFO WHERE USE_YN = 1;'})
    
    // const finalQuery=await JSON.parse(JSON.stringify(queryData))
    // const numLine=finalQuery[0]['COUNT(ITEM_CD)']
    try{
        const rowNum=await executeQuery({
            query: `SELECT count(*) FROM ALL_ASSETS 
            WHERE 1=1
            ${ type=="All"||!type ? "": `AND CAT = "${type}"` }  
            ${ riskLv=="All"||!riskLv ? "": `AND CVAR_LV = "${riskLv}"` }  
            ${!weather||weather=="All" ? "": `AND WTHR_ENG_NM = "${weather}"` }
            ${!loc || loc=="All" ? "" : `AND LOC="${loc}"` }
            ${!exchg || exchg=="All" ? "" : `AND HR_ITEM_NM="${exchg}"` }
            ${!sect || sect=="All" ? "" : `AND SECT="${sect}"` }
            ${!search ? "" :`AND MATCH(ITEM_CD_DL, ITEM_ENG_NM) AGAINST("${search}" IN BOOLEAN MODE)`}


            ;`
        })
        const parsedRow=await JSON.parse(JSON.stringify(rowNum))
        const rowCount=parsedRow[0]['count(*)']
        const result:any=await executeQuery({
            // query:`select it.* , ri.*, we.WTHR_KR_NM, we.WTHR_ENG_NM, we.WTHR_KR_DL, we.WTHR_ENG_DL, pr.ADJ_CLOSE
            // from RMS.ITEM_INFO as it 
            // inner join RMS.RISK_IDX_TMP as ri 
            // on it.ITEM_CD = ri.ITEM_CD
            // and it.USE_YN IS TRUE
            // and ri.BASE_DT = '2022-01-31' 
            // and ri.CL > 0.98
            // left join RMS.PRICE as pr
            // on ri.ITEM_CD = pr.ITEM_CD 
            // AND pr.BASE_DT = '2022-01-31'
            // left join RMS.WEATHER_INFO as we
            // on ri.WTHR_CD = we.WTHR_CD
            // LIMIT ${limit*(page-1)}, ${limit};`,
            // content:[req.body.content]
            // query:

            // `SELECT it.* , pr.BASE_DT, pr.ADJ_CLOSE, ri.VaRGauss, ri.CVaRNTS, ri.TailRisk, ri.WTHR_CD, we.* FROM RMS.ITEM_INFO it LEFT JOIN(SELECT BASE_DT, ITEM_CD, ANY_VALUE(ADJ_CLOSE) ADJ_CLOSE FROM RMS.PRICE GROUP BY ITEM_CD ORDER BY ITEM_CD ASC, BASE_DT DESC LIMIT ${numLine}) pr ON it.ITEM_CD = pr.ITEM_CD LEFT JOIN(SELECT BASE_DT, ITEM_CD, VaRGauss, CVaRNTS, TailRisk, WTHR_CD FROM RMS.RISK_IDX_TMP WHERE STEP = 1 AND CL > 0.98 ) ri ON it.ITEM_CD = ri.ITEM_CD AND pr.BASE_DT = ri.BASE_DT LEFT JOIN RMS.WEATHER_INFO we ON ri.WTHR_CD = we.WTHR_CD WHERE it.USE_YN = 1 
            // LIMIT ${limit*(page-1)}, ${limit};`
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
            WHERE 1=1
            ${ type=="All"||!type ? "": `AND CAT = "${type}"` }  
            ${ riskLv=="All"||!riskLv ? "": `AND CVAR_LV = "${riskLv}"` }  
            ${!weather||weather=="All" ? "": `AND WTHR_ENG_NM = "${weather}"` }
            ${!loc || loc=="All" ? "" : `AND LOC="${loc}"` }
            ${!exchg || exchg=="All" ? "" : `AND HR_ITEM_NM="${exchg}"` }
            ${!sect || sect=="All" ? "" : `AND SECT="${sect}"` }
            ${!search ? "" : `AND MATCH(al.ITEM_CD_DL, al.ITEM_ENG_NM) AGAINST("${search}" IN BOOLEAN MODE)`}

            ${priceOrder=="neutral" ? "" :
            priceOrder=="priceAsc" ? "ORDER BY ADJ_CLOSE ASC" : priceOrder=="priceDesc" ? "ORDER BY ADJ_CLOSE DESC" 
            : ""}
            ${lossOrder=="neutral" ? "" :
            lossOrder=="lossAsc" ? "ORDER BY CVaRNTS ASC" : lossOrder=="lossDesc" ? "ORDER BY CVaRNTS DESC" 
            : ""}
            ${priceChgOrder=="neutral" ? "" :
            priceChgOrder=="priceChgAsc" ? "ORDER BY ADJ_CLOSE ASC" : priceChgOrder=="priceChgDesc" ? "ORDER BY ADJ_CLOSE DESC" 
            : ""}

            LIMIT ${limit*(page-1)}, ${limit}
            ;`
        })

        res.status(200).json([{assets:[...result]},{rowCount:rowCount}])
    } catch(err){
        console.log(err)
        res.status(401).json({ message: "Can't find data" });
    }
}

export default handler;