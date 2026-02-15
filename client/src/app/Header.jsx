import { NavLink, useNavigate } from "react-router-dom";
import { LogoMark } from "../components/ui/LogoMark.jsx";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { useState } from "react";
import { navItems } from "../assets/api/data.jsx";

export const Header = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handleNavigate = () => {
    navigate("/");
    setOpen(false);
  };

  

  return (
    <header className="contain text-white">
      <div className="flex items-center justify-between pt-6 md:pt-10">
        
        {/* LOGO */}
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={handleNavigate}
        >
          <LogoMark />
          <h1 className="text-2xl md:text-3xl font-bold tracking-widest text-neutral-200">
            DVLPR
          </h1>
        </div>

        {/* DESKTOP NAV */}
        <nav className="hidden md:block">
          <ul className="flex items-center font-poppins tracking-wide text-xl">
            {navItems.map(({ name, path }) => (
              <li key={name}>
                <NavLink
                  to={path}
                  end={path === "/manjeet"}
                  className={({ isActive }) =>
                    `navLi ${
                      isActive
                        ? "bg-neutral-800"
                        : "bg-black hover:bg-neutral-800"
                    }`
                  }
                >
                  {name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* MOBILE MENU ICON */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          {open ? <IoClose /> : <GiHamburgerMenu />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <nav className="md:hidden mt-6 bg-black border border-neutral-800 rounded-2xl p-4">
          <ul className="flex flex-col gap-3 font-poppins">
            {navItems.map(({ name, path }) => (
              <li key={name}>
                <NavLink
                  to={path}
                  end={path === "/manjeet"}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `block px-4 py-2 rounded-xl ${
                      isActive
                        ? "bg-neutral-800"
                        : "hover:bg-neutral-800"
                    }`
                  }
                >
                  {name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};
