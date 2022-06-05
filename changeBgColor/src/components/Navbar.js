import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const activeLink = "invisible";
  const normalLink = " ";
  return (
    <React.Fragment>
      <section>
        <div className="bg-white w-full h-20 centered">
          <div className="bg-white w-full mx-5 text-3xl h-16 font-bold uppercase grid grid-cols-4 gap-4">
            <p className="centered rounded w-28 bg-red-500">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
              >
                red
              </NavLink>
            </p>
            <p className=" centered rounded w-28 bg-yellow-500">
              <NavLink
                to="/yellow"
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
              >
                ylow
              </NavLink>
            </p>
            <p className=" centered rounded w-28 bg-blue-500">
              <NavLink
                to="/blue"
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
              >
                blue
              </NavLink>
            </p>
            <p className=" centered rounded w-28 bg-green-500">
              <NavLink
                to="/green"
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
              >
                green
              </NavLink>
            </p>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Navbar;
