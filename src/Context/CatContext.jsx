import { createContext, useContext, useEffect, useReducer, useState } from "react";
import reducer from "../Reducer/CatReducer";

// get array items from Local Storage
const getLocalStorageofAllCatArray = () => {
  let StoredAllCatArray = localStorage.getItem("AllCatArray");
  // console.log(StoredAllCatArray, "arr");

  if (StoredAllCatArray) {
    return JSON.parse(localStorage.getItem("AllCatArray"));
  } else {
    return [];
  }
};

// get array items from Local Storage
const getLocalStorageCatDetailsArray = () => {
  let StoredCatDetailsArray = localStorage.getItem("catDetailsArray");
  // console.log(StoredCatDetailsArray, "arr");

  if (StoredCatDetailsArray) {
    return JSON.parse(localStorage.getItem("catDetailsArray"));
  } else {
    return [];
  }
};

const CatContext = createContext();

const initialState = {
  AllCatArray: getLocalStorageofAllCatArray(),
  isCatDetail: false,
  catDetailsArray: getLocalStorageCatDetailsArray(),
  isError: false,
};


const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  // const [localStorageUpdated, setLocalStorageUpdated] = useState(false);
  
  // useEffect(() => {
  //   JSON.parse(localStorage.getItem("AllCatArray"));
  // }, []);
  // console.log(JSON.parse(localStorage.getItem('AllCatArray')), 'json');
  // add data to localStorage
  // useEffect(() => {
  //   localStorage.setItem("catDetailsArray", JSON.stringify(state.catDetailsArray));
  //   // alert("hello");
  // }, [state.catDetailsArray]);
  
  useEffect(() => {
    localStorage.setItem("AllCatArray", JSON.stringify(state.AllCatArray));
    // setLocalStorageUpdated(true);
  }, [state.AllCatArray]);

  // useEffect(() => {
  //   localStorage.setItem("AllCatArray", JSON.stringify(state.AllCatArray));
  //   // setLocalStorageUpdated(true);
  // }, [state.AllCatArray]);

  const setCatDetailsArray = (
    name,
    image,
    clicks,
    catDetailArrayPreviousName
  ) => {
    const cats = {
      name: name,
      image: image,
      clicks: clicks,
      catDetailArrayPreviousName: catDetailArrayPreviousName,
    };
    dispatch({ type: "Set_Cat_Detail_Array", payload: cats });
  };

  const showDetails = (name, image, clicks) => {
    dispatch({ type: "Set_isCatDetail", payload: name });

    try {
      const cats = {
        name: name,
        image: image,
        clicks: clicks,
      };
      dispatch({ type: "Set_Show_Cat", payload: cats });
      //   console.log(name, image, clicks, "show");
      // console.log(state.catDetailsArray, 'hi');
    } catch (error) {
      dispatch({ type: "ERROR" });
      console.log("Error", error);
    }
  };

  const SetNoOfClicksOnImage = (clicks, name, CallFromGalleryOrDetail) => {
    try {
      // console.log(AllCatArray, "before");
      dispatch({
        type: "Set_No_Of_Clicks",
        payload: { clicks, name, CallFromGalleryOrDetail },
      });
      // console.log(AllCatArray, "after");
    } catch (error) {
      dispatch({ type: "ERROR" });
      console.log("Error", error);
    }
  };

  const AddCatsToList = (name, image, clicks) => {
    try {
      const cats = {
        name: name,
        image: image,
        clicks: clicks,
      };
      // const localStorageAllCatArray = getLocalStorageItems();
      // localStorageAllCatArray.concat(cats).map((cat) => {
      //   console.log(cat);
      // })
      dispatch({ type: "Add_Cat", payload: cats });
    } catch (error) {
      dispatch({ type: "ERROR" });
      console.log("Error", error);
    }
  };

  // const AddCatsToList = (name, image, clicks) => {
  //   // console.log(reference, 'hi');
  //   try {
  //     const cats = {
  //       name: name,
  //       image: image,
  //       clicks: clicks,
  //     };
  //     // if(localStorageUpdated){
  //     //   console.log("true");
  //     //   getLocalStorageItems();
  //     // }
  //     dispatch({ type: "Add_Cat", payload: cats });
  //     //   console.log(name, image, clicks, "add");
  //     // console.log(state.AllCatArray, 'hi');
  //   } catch (error) {
  //     dispatch({ type: "ERROR" });
  //     console.log("Error", error);
  //   }
  // };

  // const showCat = (name, image, clicks) => {

  // }

  return (
    <CatContext.Provider
      value={{
        ...state,
        SetNoOfClicksOnImage,
        AddCatsToList,
        showDetails,
        setCatDetailsArray,
      }}
    >
      {children}
    </CatContext.Provider>
  );
};

// custom hook
const useCatContext = () => {
  return useContext(CatContext);
};

export { AppProvider, useContext, useCatContext };
