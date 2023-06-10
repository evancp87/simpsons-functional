/* eslint-disable react/prop-types */
import { useState } from "react";
const Controls = ({
  searchSimpsonsInput,
  sortSimpsons,
  resetFilters,
  character,
  errors,
}) => {
  return (
    <>
      <input type="text" value={character} onInput={searchSimpsonsInput} />
      <select onInput={sortSimpsons}>
        <option value=""></option>
        <option value="Asc">Asc</option>
        <option value="Desc">Desc</option>
      </select>
      <button onClick={resetFilters}>Reset</button>
      {/* if there are errors then loop over the errors array and display the error messages */}
      <ul>
        {errors &&
          errors.map((error, index) => <li key={index}>{error.message}</li>)}
      </ul>
    </>
  );
};

export default Controls;
