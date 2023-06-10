/* eslint-disable react/prop-types */
import { useState } from "react";
import Character from "./Character";
import Controls from "./Controls";
import { validate } from "../validation/index.js";

const Simpsons = ({ data: simpsons, setData, character, setCharacter }) => {
  const [sort, setSort] = useState("");
  const [search, setSearch] = useState("");
  const [errors, setErrors] = useState(null);

  const handleDelete = (character) => {
    const indexOf = simpsons.findIndex((item) => item.character === character);
    const _simpsons = [...simpsons];
    _simpsons.splice(indexOf, 1);
    setData(_simpsons);
  };

  // functions for searching and filtering
  const searchSimpsonsInput = async (e) => {
    const { value } = e.target;
    setCharacter(value);
    const payload = { character: value }; // Wrap the string value in an object
    const res = await validate(payload);

    setErrors(res);
    // setSearch(e.target.value);
  };

  const sortSimpsons = (e) => {
    console.log(e.target.value);
    setSort(e.target.value);
  };

  const filteredSimpsons = () => {
    let filteredList = [...simpsons];
    // if a search query is entered, filter the  state and return the character that is in the query
    if (search) {
      filteredList = filteredList.filter((item) =>
        item.character.toLowerCase().includes(search.toLowerCase())
      );
    }
    // sorting alphabetically ascending or descending
    if (sort === "Asc") {
      filteredList.sort((numOne, numTwo) =>
        numOne.character > numTwo.character ? 1 : -1
      );
    } else if (sort === "Desc") {
      filteredList.sort((numOne, numTwo) =>
        numOne.character > numTwo.character ? -1 : 1
      );
    }

    return filteredList;
  };

  const resetFilters = () => {
    setSort("");
    setSearch("");
  };

  const filteredSimpsonsData = filteredSimpsons();

  return (
    <>
      <Controls
        searchInput={search}
        sortInput={sort}
        resetFilters={resetFilters}
        sortSimpsons={sortSimpsons}
        searchSimpsonsInput={searchSimpsonsInput}
        character={character}
        setCharacter={setCharacter}
        errors={errors}
      />
      {filteredSimpsonsData.length === 0 && <p>No results found, dude</p>}
      {filteredSimpsonsData.map((item, index) => {
        return (
          <Character
            item={item}
            key={item.id}
            handleDelete={handleDelete}
            resetFilters={resetFilters}
            simpsons={simpsons}
            sortSimpsons={sortSimpsons}
            searchSimpsonsInput={searchSimpsonsInput}
            character={character}
            setCharacter={setCharacter}
          />
        );
      })}
    </>
  );
};

export default Simpsons;
