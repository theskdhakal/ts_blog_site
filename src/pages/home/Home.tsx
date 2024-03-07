import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className="bg-blue-300 flex justify-between">
      <button>
        <Link to="/register">Register</Link>
      </button>
      <button>
        <Link to="/login">Login</Link>
      </button>
    </div>
  );
};
