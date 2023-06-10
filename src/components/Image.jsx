/* eslint-disable react/prop-types */

const Image = ({ liked, image, character }) => {
  return (
    <img className={liked ? "liked" : "notLiked"} src={image} alt={character} />
  );
};

export default Image;
