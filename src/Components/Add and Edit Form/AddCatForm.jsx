import React, { useEffect, useState } from "react";
import { useCatContext } from "../../Context/CatContext";

const AddCatForm = () => {
  const { AddCatsToList, showDetails, AllCatArray } = useCatContext();
  const [showForm, setShowForm] = useState(false);
  const [inputValues, setInputValues] = useState({
    field1: "",
    field2: "",
    field3: "",
  });

  // add data to localStorage

  // const {name, image, clicks} = JSON.parse(localStorage.getItem('AllCatArray'));

  const handleAddCat = () => {
    setShowForm(true);
  };

  const handleCancel = () => {
    setShowForm(false);
    setInputValues({
      field1: "",
      field2: "",
      field3: "",
    });
  };

  const handleAdd = (e) => {
    e.preventDefault();
    const { field1, field2, field3 } = inputValues;

    AddCatsToList(
      field1,
      field2,
      field3
    );
    setShowForm(false);
    setInputValues({
      field1: "",
      field2: "",
      field3: "",
    });
    showDetails(field1, field2, field3);
  };

  return (
    <>
      <button
        className="w-52 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 m-2 mt-3 rounded focus:outline-none focus:shadow-outline"
        type="button"
        onClick={handleAddCat}
      >
        Open New Form
      </button>
      <div
        className={`fixed top-0 left-0 w-screen h-screen bg-gray-500 bg-opacity-50 flex justify-center items-center ${
          showForm ? "visible" : "hidden"
        }`}
      >
        <div className="bg-white rounded-lg p-8">
          <h2 className="text-2xl mb-4">Form Popup</h2>
          <form>
            {/* Cat Name */}
            <div className="flex flex-wrap my-4">
              <div className="w-full">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="catName"
                >
                  Cat Name
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="catNname"
                  type="text"
                  value={inputValues.field1}
                  onChange={(e) =>
                    setInputValues({ ...inputValues, field1: e.target.value })
                  }
                  placeholder="Tabby"
                  autoComplete="off"
                />
              </div>
            </div>

            {/* Cat Image */}
            <div className="flex flex-wrap my-4">
              <div className="w-full">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="catImage"
                >
                  Cat Image
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="catImage"
                  type="text"
                  value={inputValues.field2}
                  onChange={(e) =>
                    setInputValues({ ...inputValues, field2: e.target.value })
                  }
                  placeholder="images/xyz.jpg"
                  autoComplete="off"
                />
              </div>
            </div>

            {/* Cat clicks */}
            <div className="flex flex-wrap my-4">
              <div className="w-full">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="catClicks"
                >
                  Clicks on Cat
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="catClicks"
                  type="number"
                  value={inputValues.field3}
                  autoComplete="off"
                  onChange={(e) =>
                    setInputValues({ ...inputValues, field3: e.target.value })
                  }
                />
              </div>
            </div>

            {/* Save Button */}
            <button
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
              onClick={handleAdd}
            >
              Add
            </button>

            {/* Cancel Button */}
            <button
              className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 ml-2 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={handleCancel}
            >
              Cancel
            </button>
          </form>
        </div>
      </div>
      {/* <button onClick={() => setIsFormOpen(true)}>Open Form</button> */}
    </>
  );
};

export default AddCatForm;
