import { Dispatch, SetStateAction, useEffect, useState,ChangeEvent } from "react";
import Image from "next/image";

import arrow from "assets/icons/explore/arrow.svg";
import blueArrow from "assets/icons/explore/blueArrow.svg";
import check from "assets/icons/explore/check.svg";
import blueCheck from "assets/icons/explore/blueCheck.svg";


interface Props {
    defaultData:string | number;
  data: { id: number; title: string | number }[];
  title: string;
  isLarge?: boolean;
  isMidium?: boolean;
  selectHandler?:any;
}

const MultiSelect = ({
    defaultData,
  data,
  title,
  isLarge,
  isMidium,
  selectHandler
}: Props) => {
  const [isActive, setIsActive] = useState(false);



  return (
    <article className="flex gap-4 items-center relative justify-between min-w-80">
      <label htmlFor={title} className="text-sm font-bold text-[#111111]">{title}</label>
      <select id={title}
      value={defaultData}
        onClick={() => setIsActive(!isActive)}
        onChange={selectHandler}

        className={`cursor-pointer text-sm border rounded-20 max-h-10 py-2.5 px-3.5 flex justify-between hover:border-[#0198FF] ${
          isActive
            ? "border-[#0198FF] "
  
            : "border-gray-200 "
        } ${isLarge ? "w-[371px]" : isMidium ? "w-[271px]" : "w-[253px]"}`}
      >

      
    
          {data.map(({ id, title }) => (
            <option
            value={title}
              key={id}
              className={`flex gap-2 px-3 py-1.5 cursor-pointer hover:bg-[#F3F4F6]`}
            >

                {title}
            
            </option>
          ))}
 
      </select>
    </article>
  );
};

export default MultiSelect;
