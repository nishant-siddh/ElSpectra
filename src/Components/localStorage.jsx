// import React, { useState, useEffect } from "react";
// import { useCatContext } from "../Context/CatContext";

// const localStorage = () => {
//   const {} = useCatContext();
//   const [allCatArray, setAllCatArray] = useState([]);
//   const [catDetailsArray, setCatDetailsArray] = useState([]);
//   const [clicks, setClicks] = useState(0);
//   const [name, setName] = useState("");
//   const [image, setImage] = useState("");

//   useEffect(() => {
//     const storedAllCatArray = localStorage.getItem("allCatArray");
//     if (storedAllCatArray) {
//       setAllCatArray(JSON.parse(storedAllCatArray));
//     }

//     const storedCatDetailsArray = localStorage.getItem("catDetailsArray");
//     if (storedCatDetailsArray) {
//       setCatDetailsArray(JSON.parse(storedCatDetailsArray));
//     }

//     const storedClicks = localStorage.getItem("clicks");
//     if (storedClicks) {
//       setClicks(Number(storedClicks));
//     }

//     const storedName = localStorage.getItem("name");
//     if (storedName) {
//       setName(storedName);
//     }

//     const storedImage = localStorage.getItem("image");
//     if (storedImage) {
//       setImage(storedImage);
//     }
//   }, []);

//   useEffect(() => {
//     localStorage.setItem("allCatArray", JSON.stringify(allCatArray));
//   }, [allCatArray]);

//   useEffect(() => {
//     localStorage.setItem("catDetailsArray", JSON.stringify(catDetailsArray));
//   }, [catDetailsArray]);

//   useEffect(() => {
//     localStorage.setItem("clicks", clicks);
//   }, [clicks]);

//   useEffect(() => {
//     localStorage.setItem("name", name);
//   }, [name]);

//   useEffect(() => {
//     localStorage.setItem("image", image);
//   }, [image]);
// }

// export default localStorage;
