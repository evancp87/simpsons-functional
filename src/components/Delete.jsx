/* eslint-disable react/prop-types */

const Delete = ({ character, handleDelete }) => {
  return (
    <div>
      <button onClick={() => handleDelete(character)}>Delete</button>
    </div>
  );
};

export default Delete;
