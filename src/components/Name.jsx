/* eslint-disable react/prop-types */

const Name = ({ liked, character, toggleLiked }) => {
  return (
    <div>
      <h1>{character}</h1>
      <button onClick={() => toggleLiked()}>
        {liked ? "Liked" : " Not liked"}
      </button>
    </div>
  );
};

export default Name;
