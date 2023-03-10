import React, { useEffect } from "react";
import { useCatContext } from "../../Context/CatContext";

// get array items from Local Storage
// const getLocalStorageItems = () => {
//   let StoredCatDetailsArray = localStorage.getItem("catDetailsArray");
//   console.log(StoredCatDetailsArray, "arr");

//   if (StoredCatDetailsArray) {
//     return JSON.parse(localStorage.getItem("catDetailsArray"));
//   } else {
//     return [];
//   }
// };

const IndividualCat = () => {
  let { AllCatArray, showDetails, SetNoOfClicksOnImage, catDetailsArray } = useCatContext();

  const handleShowDetails = (clicks, name, index) => {
    let elementAtIndex = AllCatArray[index];
    SetNoOfClicksOnImage(clicks, name, "ClickedIndividualCat");
    showDetails(
      elementAtIndex.name,
      elementAtIndex.image,
      elementAtIndex.clicks
    );
  };

  useEffect(() => {
    localStorage.setItem("catDetailsArray", JSON.stringify(catDetailsArray));
  }, [catDetailsArray]);

  return (
    <>
      {AllCatArray.map((element, index) => {
        return (
          <div
            key={index}
            className="w-72 pb-10 max-w-sm rounded overflow-hidden border-2 hover:shadow-2xl transition duration-200 ease-in-out cursor-pointer"
            onClick={() =>
              handleShowDetails(element.clicks, element.name, index)
            }
          >
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{element.name}</div>
              <p className="text-gray-700 text-base">
                No of clicks: {element.clicks}
              </p>
            </div>
            <img className="w-full h-52" src={element.image} alt="tabby" />
          </div>
        );
      })}
    </>
  );
};

export default IndividualCat;
