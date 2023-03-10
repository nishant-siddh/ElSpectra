const CatReducer = (state, action) => {
  // console.log(JSON.parse(localStorage.getItem('AllCatArray')), 'json');
  // const getLocalStorageItems = () => {
  //   let StoredAllCatArray = localStorage.getItem("AllCatArray");
  //   console.log(StoredAllCatArray, "arr");
  
  //   if (StoredAllCatArray) {
  //     return JSON.parse(localStorage.getItem("AllCatArray"));
  //   } else {
  //     return [];
  //   }
  // };
  
// get array items from Local Storage
const getLocalStorageItems = () => {
  let StoredCatDetailsArray = localStorage.getItem("catDetailsArray");
  console.log(StoredCatDetailsArray, "arr");

  if (StoredCatDetailsArray) {
    return JSON.parse(localStorage.getItem("catDetailsArray"));
  } else {
    return [];
  }
};

  switch (action.type) {
    case "Set_No_Of_Clicks":
      return {
        ...state,
        AllCatArray: state.AllCatArray.map((cat) => {
          if (cat.name === action.payload.name) {
            if (
              action.payload.CallFromGalleryOrDetail === "ClickedIndividualCat"
            ) {
              return { ...cat, clicks: Number(cat.clicks) };
            } else {
              return { ...cat, clicks: Number(cat.clicks) + 1 };
            }
          } else {
            return cat;
          }
        }),

        catDetailsArray: {
          ...state.catDetailsArray,
          clicks: Number(state.catDetailsArray.clicks) + 1,
        },
      };

    case "Add_Cat":
      return {
        ...state,
        AllCatArray: [...state.AllCatArray, action.payload]
      };

    case "Set_isCatDetail":
      return {
        ...state,
        isCatDetail: true,
      };

    case "Set_Show_Cat":
      return {
        ...state,
        catDetailsArray: action.payload,
      };

    case "Set_Cat_Detail_Array":
      return {
        ...state,
        catDetailsArray: action.payload,
        AllCatArray: state.AllCatArray.map((cat) => {
          if (cat.name === action.payload.catDetailArrayPreviousName) {
            return action.payload;
          } else {
            return cat;
          }
        }),
      };

    case "ERROR":
      return {
        ...state,
        isError: true,
      };

    default:
      return state;
  }
};

export default CatReducer;
