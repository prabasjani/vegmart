import { Link } from "react-router-dom";

const Missing = () => {
  return (
    <div className="container text-center shadow rounded py-4 mt-5 bg-danger-subtle">
      <h1 className="my-3 fs-1 fw-bold">Page Not Found</h1>
      <p className="fs-5 my-2">Check the URL you typed...</p>
      <p className="fs-5">Click the Shop and visit our Shopping Page</p>
      <p>or</p>
      <Link to="/">Go to Shop Page...</Link>
    </div>
  );
};

export default Missing;
