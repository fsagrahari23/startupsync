// components/Navbar.js
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-lg font-bold">AuthApp</h1>
        <div>
          <Link
            to="/auth/login"
            className="text-white mr-4 hover:text-gray-300"
          >
            Login
          </Link>
          <Link to="/auth/register" className="text-white hover:text-gray-300">
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
