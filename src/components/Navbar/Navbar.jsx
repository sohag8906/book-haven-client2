// src/components/Navbar/Navbar.jsx
import React, { useState, useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import book from "../../assets/Book.jpg";

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    if (newTheme === "dark") document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  };

  const handleSignOut = () => signOutUser().catch((err) => console.log(err));

  const links = (
    <>
      <li>
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            isActive ? "text-primary font-semibold" : "hover:text-primary"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/allBooks"
          className={({ isActive }) =>
            isActive ? "text-primary font-semibold" : "hover:text-primary"
          }
        >
          All Books
        </NavLink>
      </li>
      {user && (
        <>
          <li>
            <NavLink
              to="/addBooks"
              className={({ isActive }) =>
                isActive ? "text-primary font-semibold" : "hover:text-primary"
              }
            >
              Add Book
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/myBooks"
              className={({ isActive }) =>
                isActive ? "text-primary font-semibold" : "hover:text-primary"
              }
            >
              My Books
            </NavLink>
          </li>
        </>
      )}
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-lg px-4">
      {/* Navbar Start */}
      <div className="navbar-start">
        {/* Mobile Dropdown */}
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 gap-2"
          >
            {links}
            <li>
              <button onClick={toggleTheme} className="btn btn-sm btn-outline w-full">
                {theme === "light" ? "🌞 Light" : "🌙 Dark"}
              </button>
            </li>
            <li>
              {user ? (
                <button onClick={handleSignOut} className="btn btn-sm btn-error w-full">
                  Log Out
                </button>
              ) : (
                <Link to="/register" className="btn btn-sm btn-primary w-full text-center">
                  Login
                </Link>
              )}
            </li>
          </ul>
        </div>

        {/* Logo */}
        <div className="flex items-center gap-2">
          <img className="w-10 h-10" src={book} alt="Book" />
          <Link className="btn btn-ghost normal-case text-xl">The Book Haven</Link>
        </div>
      </div>

      {/* Navbar Center (Desktop) */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-2">{links}</ul>
      </div>

      {/* Navbar End (Desktop) */}
      <div className="navbar-end flex items-center gap-2">
        <button onClick={toggleTheme} className="btn btn-sm btn-outline">
          {theme === "light" ? "🌞" : "🌙"}
        </button>
        {user ? (
          <>
            <div className="tooltip tooltip-bottom" data-tip={user.displayName || "User"}>
              <img
                src={user.photoURL || "https://i.ibb.co/3d3Qq5M/default-user.png"}
                className="w-10 h-10 rounded-full"
                alt="User"
              />
            </div>
            <button onClick={handleSignOut} className="btn btn-sm btn-error">
              Log Out
            </button>
          </>
        ) : (
          <Link to="/register" className="btn btn-sm btn-primary">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
