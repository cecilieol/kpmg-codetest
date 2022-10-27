import Data from "../data/dummy-data-reviewnotes.json";
import { useState } from "react";
import Header from "./Header";
import FilterBar from "./FilterBar";
import Table from "./Table";
import LoadMore from "./LoadMore";

export default function ReviewNotes() {
  const [currentlyLoaded, setCurrentlyLoaded] = useState(3);
  let currentData = Data.slice(0, currentlyLoaded);

  const [searches, setSearches] = useState(currentData);
  const [text, setText] = useState("");

  const onChangeHandler = (text) => {
    let matches = [];

    if (text.length > 0) {
      matches = currentData.filter((result) => {
        const regex = new RegExp(`${text}`, "gi");
        return result.title.match(regex);
      });
      setCurrentlyLoaded(Data.length + 3);
      setSearches(matches);
    } else {
      setSearches(currentData);
    }
    setText(text);
  };

  function handleLoad() {
    setCurrentlyLoaded(currentlyLoaded + 3);
    setSearches(currentData);
  }

  return (
    <>
      <Header />
      <FilterBar onChangeHandler={onChangeHandler} text={text} />
      <Table results={searches} />
      <LoadMore
        currentlyLoaded={currentlyLoaded}
        Data={Data}
        handleLoad={handleLoad}
      />
    </>
  );
}
