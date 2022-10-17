import { Link } from "react-router-dom";
import bed from "../assets/images/icons/bed.svg";
import office from "../assets/images/icons/office.svg";
import sofa from "../assets/images/icons/sofa.svg";
import terrace from "../assets/images/icons/terrace.svg";
import logo from "../assets/images/logo.svg";
import useAuth from "../hooks/useAuth";

const Header = () => {
  const user = useAuth();
  return (
    <>
      <header className="py-4 shadow-sm bg-pink-100 lg:bg-white">
        <div className="container flex items-center justify-between">
          {/* <!-- logo --> */}
          <Link to="/" className="block w-32">
            <img src={logo} alt="logo" className="w-full" />
          </Link>
          {/* <!-- logo end --> */}

          {/* <!-- searchbar --> */}
          <div className="w-full xl:max-w-xl lg:max-w-lg lg:flex relative hidden">
            <span className="absolute left-4 top-3 text-lg text-gray-400">
              <i className="fas fa-search"></i>
            </span>
            <input
              type="text"
              className="pl-12 w-full border border-r-0 border-primary py-3 px-3 rounded-l-md focus:ring-primary focus:border-primary"
              placeholder="search"
            />
            <button
              type="submit"
              className="bg-primary border border-primary text-white px-8 font-medium rounded-r-md hover:bg-transparent hover:text-primary transition"
            >
              Search
            </button>
          </div>
          {/* <!-- searchbar end --> */}

          {/* <!-- navicons --> */}
          <div className="space-x-4 flex items-center">
            <a
              href="wishlist.html"
              className="block text-center text-gray-700 hover:text-primary transition relative"
            >
              <span className="absolute -right-0 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs">
                5
              </span>
              <div className="text-2xl">
                <i className="far fa-heart"></i>
              </div>
              <div className="text-xs leading-3">Wish List</div>
            </a>
            <Link
              to="/cart"
              className="lg:block text-center text-gray-700 hover:text-primary transition hidden relative"
            >
              <span className="absolute -right-3 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs">
                3
              </span>
              <div className="text-2xl">
                <i className="fas fa-shopping-bag"></i>
              </div>
              <div className="text-xs leading-3">Cart</div>
            </Link>

            {
              user && <Link
                to="/account"
                className="block text-center text-gray-700 hover:text-primary transition"
              >
                <div className="text-2xl">
                  <i className="far fa-user"></i>
                </div>
                <div className="text-xs leading-3">Account</div>
              </Link>
            }
            
          </div>
          {/* <!-- navicons end --> */}
        </div>
      </header>

      {/* Navbar */}
      <nav className="bg-gray-800 hidden lg:block">
        <div className="container">
          <div className="flex">
            {/* <!-- all category --> */}
            <div className="px-8 py-4 bg-primary flex items-center cursor-pointer group relative">
              <span className="text-white">
                <i className="fas fa-bars"></i>
              </span>
              <span className="capitalize ml-2 text-white">All categories</span>

              <div className="absolute left-0 top-full w-full bg-white shadow-md py-3 invisible opacity-0 group-hover:opacity-100 group-hover:visible transition duration-300 z-50 divide-y divide-gray-300 divide-dashed">
                {/* <!-- single category --> */}
                <a
                  href="#"
                  className="px-6 py-3 flex items-center hover:bg-gray-100 transition"
                >
                  <img src={bed} className="w-5 h-5 object-contain" />
                  <span className="ml-6 text-gray-600 text-sm">Bedroom</span>
                </a>

                <a
                  href="#"
                  className="px-6 py-3 flex items-center hover:bg-gray-100 transition"
                >
                  <img src={sofa} className="w-5 h-5 object-contain" />
                  <span className="ml-6 text-gray-600 text-sm">Sofa</span>
                </a>

                <a
                  href="#"
                  className="px-6 py-3 flex items-center hover:bg-gray-100 transition"
                >
                  <img src={office} className="w-5 h-5 object-contain" />
                  <span className="ml-6 text-gray-600 text-sm">Office</span>
                </a>

                <a
                  href="#"
                  className="px-6 py-3 flex items-center hover:bg-gray-100 transition"
                >
                  <img src={terrace} className="w-5 h-5 object-contain" />
                  <span className="ml-6 text-gray-600 text-sm">Outdoor</span>
                </a>
                {/* <!-- single category end -->
                              <!-- single category --> */}

                {/* <!-- single category end --> */}
              </div>
            </div>
            {/* <!-- all category end --> */}

            {/* <!-- nav menu --> */}
            <div className="flex items-center justify-between flex-grow pl-12">
              <div className="flex items-center space-x-6 text-base capitalize">
                <Link
                  to="/"
                  className="text-gray-200 hover:text-white transition"
                >
                  Home
                </Link>
                <Link
                  to="/shop"
                  className="text-gray-200 hover:text-white transition"
                >
                  Shop
                </Link>
                <a
                  href="#"
                  className="text-gray-200 hover:text-white transition"
                >
                  About us
                </a>
                <a
                  href="#"
                  className="text-gray-200 hover:text-white transition"
                >
                  Contact us
                </a>
              </div>

                {!user && <Link
                  to="/login"
                  className="justify-self-end text-gray-200 hover:text-white transition"
                >
                  Login/Register
                </Link>}

              
              {/* {!user && <Link
                to="/login"
                className="justify-self-end text-gray-200 hover:text-white transition"
              >
                Login/Register
              </Link>} */}
              
            </div>
            {/* <!-- nav menu end --> */}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
