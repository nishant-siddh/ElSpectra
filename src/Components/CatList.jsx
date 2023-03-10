import React from "react";
import { useCatContext } from "../Context/CatContext";

const CatList = () => {
  const { AllCatArray, showDetails } = useCatContext();

  const handleClickOnList = (index) => {
    let elementAtIndex = AllCatArray[index];
    console.log(elementAtIndex);
    showDetails(elementAtIndex.name, elementAtIndex.image, elementAtIndex.clicks);
  }

  return (
    <>
      {AllCatArray.length !== 0 && <div className="w-64 max-w-sm border-2 rounded">
        <ul>
          {AllCatArray.map((element, index) => {
            return (
              <li key={index} onClick={() => handleClickOnList(index)} tabIndex="0" className="flex w-full border-2 p-3 hover:bg-blue-500 hover:text-white focus:bg-blue-500 focus:text-white">
                <div className="w-9/12 text-left pl-5">{element.name}</div>
                <div className="w-3/12"><span className="px-3 py-0.5 rounded-full bg-gray-500 text-white font-bold">{element.clicks}</span></div>
              </li>
            );
          })}
        </ul>
      </div>}
    </>
  );
};

export default CatList;
