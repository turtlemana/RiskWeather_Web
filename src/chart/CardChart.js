import {
    AreaChart,
    LineChart,
    Area,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer
  } from "recharts";
  import {useMemo} from 'react'
  
 
  
  export default function CardChart({chartData}) {
    // const chartDat=useMemo(()=>{
    //   const chartColor=JSON.parse(JSON.stringify(chartData))
    //   if(chartData[0].y > chartData.at(-1).y){
    //     chartColor[0].color="#DC2828"
    // } else if(chartData[0].y <= chartData.at(-1).y){
    //   chartColor[0].color="#36D399"
    // }

    // return chartColor
    // },[chartData])

    
    
    return (
      <div style={{ width: 281, height: 70 }}>
        <ResponsiveContainer >
          <AreaChart
            width={280}
            height={70}
            data={chartData}
            margin={{
              top: 10,
              right: 0,
              left: 0,
              bottom: 6
            }}
          >
            <YAxis yAxisId="left" hide={true}tickCount="5" type="number" domain={['auto','auto']}/>
            {/* <CartesianGrid strokeDasharray="3 3" /> */}
            {/* <XAxis  dataKey="x"  />
            <YAxis   yAxisId="left" width={2} />
            <YAxis yAxisId="right" width={2} orientation="right" className={`text-sm`} /> */}
            {/* <Tooltip /> */}
            {/* <Legend/> */}
            <Area
            dot={false}
              yAxisId="left"
              type="natural"
              dataKey="y"
              stroke={"blue"}
            //   activeDot={{ r: 4 }}
              connectNulls={true}
              strokeWidth={2}
              fill={"blue"}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    );
  }
  