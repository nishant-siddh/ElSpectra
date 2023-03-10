import { useState } from "react";
import reactLogo from "./assets/react.svg";
// import 'tabby' from ''
import "./App.css";
import CatList from "./Components/CatList";
import CatDetails from "./Components/CatDetails";
import CatEditForm from "./Components/Add and Edit Form/CatEditForm";
import CatsGallery from "./Components/Cat Gallery/CatsGallery";

function App() {
  return (
    <>
      <h2 className="text-slate-900 text-center text-2xl font-medium border-b-2 py-4 px-2">
        Cat CLicker App
      </h2>
      <div className="flex flex-wrap justify-center gap-4 my-8">
        <CatList />
        <CatDetails />
        <CatEditForm />
      </div>

      <CatsGallery />
    </>
  );
}

export default App;
