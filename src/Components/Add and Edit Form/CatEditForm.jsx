import React, { useEffect, useRef, useState } from "react";
import { useCatContext } from "../../Context/CatContext";
import AddCatForm from "../Add and Edit Form/AddCatForm";

const CatEditForm = () => {

  const {catDetailsArray, setCatDetailsArray } = useCatContext();
  const [isEdit, setIsEdit] = useState(false);
  const [readOnly, setReadOnly] = useState(true);
  const [catDetail, setCatDetail] = useState({});

  let catDetailArrayPreviousName;

  if (catDetailsArray.length !== 0) {
    const { name } = catDetailsArray;
    catDetailArrayPreviousName  = name;
  }
  const {name, image, clicks} = catDetail;

  useEffect(() => {
    if (catDetailsArray.length !== 0) {
      setCatDetail({ ...catDetailsArray });
    }
  }, [catDetailsArray]);

  const handleEdit = () => {
    setIsEdit(true);
    setReadOnly(false);
  }

  const handleSave = () => {
    setIsEdit(false);
    setReadOnly(true);
    setCatDetailsArray(name, image, clicks, catDetailArrayPreviousName);
  }
  
  const handleCancel = () => {
    setIsEdit(false);
    setReadOnly(true);
    setCatDetail({ ...catDetailsArray });
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCatDetail(prevState => ({
      ...prevState,
      [name]: value
    }));
  }

  return (
    <div className="flex flex-col w-64 max-w-sm h-fit border-2 rounded">
      {/* Add Cat Button */}
      <AddCatForm />

      {/* Edit form */}
      <form className="w-full max-w-lg px-4 pb-3">

        {/* Cat Name */}
        <div className="flex flex-wrap my-2">
          <div className="w-full">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="catName">
              Cat Name
            </label>
            <input className="w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" 
              id="catName" type="text" name="name" value={name} placeholder="Tabby" readOnly={readOnly} onChange={handleInputChange} autoComplete="off" />
          </div>
        </div>

        {/* Cat Image */}
        <div className="flex flex-wrap my-2">
          <div className="w-full">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="catImage">
              Cat Image
            </label>
            <input
              className="w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="catImage" type="text" name="image" value={image} placeholder="images/xyz.jpg" readOnly={readOnly} onChange={handleInputChange} autoComplete="off" />
          </div>
        </div>

        {/* Cat clicks */}
        <div className="flex flex-wrap my-2">
          <div className="w-full">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="catClicks" >
              Cat Clicks
            </label>
            <input
              className="w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="catClicks" type="number" name="clicks" value={clicks} readOnly={readOnly} onChange={handleInputChange} autoComplete="off" />
          </div>
        </div>

        {/* Edit Button */}
        {!isEdit && <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" disabled={ catDetailsArray.length === 0 } type="button" onClick={handleEdit}>
          Edit
        </button>}

        {/* Save Button */}
        {isEdit && <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button"  onClick={handleSave}>
          Save
        </button>}

        {/* Cancel Button */}
        {isEdit && <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 ml-2 rounded focus:outline-none focus:shadow-outline" type="button" onClick={handleCancel}>
          Cancel
        </button>}
      </form>
    </div>
  );
};

export default CatEditForm;
