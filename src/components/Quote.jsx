/* eslint-disable react/prop-types */

const Quote = ({ characterDirection, quote }) => {
  const direction = characterDirection === "Left";

  return <p className={direction && "left-text"}>{quote}</p>;
};

export default Quote;
