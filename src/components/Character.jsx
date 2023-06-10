/* eslint-disable react/prop-types */

import { useState } from "react";
import Name from "./Name";
import Quote from "./Quote";
import Image from "./Image";
import Delete from "./Delete";
import { useSelector, useDispatch } from "react-redux";

const Character = ({ item, characterDirection, handleDelete }) => {
  const [liked, setLiked] = useState(false);

  const toggleLiked = () => {
    setLiked(!liked);
  };

  return (
    <div className="characterContainer">
      <Name
        character={item.character}
        liked={liked}
        toggleLiked={toggleLiked}
        id={item.id}
      />
      <Quote quote={item.quote} characterDirection={characterDirection} />
      <Image image={item.image} />

      <Delete
        character={item.character}
        handleDelete={handleDelete}
        id={item.id}
      />
    </div>
  );
};

export default Character;
