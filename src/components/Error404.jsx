import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <>
      <p>Doh! Not found!</p>
      <Link to="/">Home</Link>
    </>
  );
};

export default Error404;
