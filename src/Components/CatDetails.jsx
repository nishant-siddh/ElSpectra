import React, { useEffect, useState } from "react";
import { useCatContext } from "../Context/CatContext";
import tabby from "../images/tabby.webp";



const CatDetails = () => {
  let { SetNoOfClicksOnImage, catDetailsArray } = useCatContext();
  const { name, image, clicks } = catDetailsArray;

  const handleCLick = () => {
    // console.log(clicks, name);
    SetNoOfClicksOnImage(clicks, name, 'ClickedImage')
  };


  return (
    <>
      {catDetailsArray.length !== 0 && (
        <div className="w-80 max-w-sm h-96 rounded overflow-hidden border-2 shadow-lg">
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{name}</div>
            <p className="text-gray-700 text-base">
              No of clicks: {clicks}
            </p>
          </div>
          <img
            className="w-full h-52 cursor-pointer hover:brightness-75 duration-500"
            src={image}
            alt="tabby"
            onClick={handleCLick}
          />
          <div className="px-6 py-4">
            <p className="text-gray-700 mb-2">tabby, taby, tabbii</p>
            <p className="text-gray-700 text-base">
              {clicks >= 0 && clicks <= 5
                ? "Infant"
                : clicks >= 6 && clicks <= 12
                ? "Child"
                : clicks >= 13 && clicks <= 25
                ? "Young"
                : clicks >= 26 && clicks <= 40
                ? "Middle-Age"
                : clicks >= 41 && clicks <= 60
                ? "Old"
                : "Very Old"}
            </p>
          </div>
          {/* classNameName='w-72 max-w-7xl border-2 rounded' */}
          {/* <div className="px-6 pt-4 pb-2">
  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
</div> */}
        </div>
      )}
    </>
  );
};

export default CatDetails;