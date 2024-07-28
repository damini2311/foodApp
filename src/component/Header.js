import { useContext } from "react";
import { LOGO_URL } from "../utils/contants";
import { Link, useNavigate } from "react-router-dom";
import UseOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const onlineStatus = UseOnlineStatus();
  const { LoggedInUser, setLoggedInUser } = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items);
  const navigate = useNavigate();

  const handleLogout = () => {
    setLoggedInUser("");
  };

  return (
    <div className="flex justify-between items-center shadow-lg  bg-white ">
      <div className="w-28">
        <img src={LOGO_URL} alt="Logo" className="w-full h-auto" />
      </div>

      <div className="flex items-center space-x-4">
        <ul className="flex space-x-6 text-gray-700 font-medium text-base">
          <li className="flex items-center">
            <span className="mr-2">Online Status:</span>
            <span>{onlineStatus ? "✅" : "🔴"}</span>
          </li>
          <li>
            <Link to="/" className="hover:text-blue-500">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-blue-500">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-blue-500">
              Contact Us
            </Link>
          </li>
          <li>
            <Link to="/cart" className="hover:text-blue-500">
              Cart ({cartItems.length} items)
            </Link>
          </li>
        </ul>
        <div className="flex items-center space-x-4">
          {LoggedInUser ? (
            <>
              <button
                className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                onClick={handleLogout}
              >
                Logout
              </button>
              <span className="text-gray-700">{LoggedInUser}</span>
            </>
          ) : (
            <button
              className="px-4 py-2 mr-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
              onClick={() => navigate("/login")}
            >
              Login
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
