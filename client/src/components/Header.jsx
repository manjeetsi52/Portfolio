import { NavLink, useNavigate } from "react-router-dom";
import { LogoMark } from "./LogoMark";

export const Header = () => {
  const navigate = useNavigate()
  const handleNavigate = ()=>{
    navigate('/')
  }
  return (
    <header className="flex justify-between items-center contain text-white text-xl ">
      <div className="flex items-center justify-center gap-2 cursor-pointer" onClick={handleNavigate}>
        <LogoMark />
        <h1 className="text-3xl text-neutral-200 font-bold tracking-widest">
          DVLPR
        </h1>
      </div>

      <nav>
        <ul className="flex justify-center items-center font-poppins tracking-wide">
          <li>
            <NavLink
              to="/manjeet"
              end
              className={({ isActive }) =>
                `navLi ${isActive ? "bg-neutral-800" : "bg-black hover:bg-neutral-800"}`
              }
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/manjeet/education"
              className={({ isActive }) =>
                `navLi ${isActive ? "bg-neutral-800" : "bg-black hover:bg-neutral-800"}`
              }
            >
              Education
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/manjeet/skills"
              className={({ isActive }) =>
                `navLi ${isActive ? "bg-neutral-800" : "bg-black  hover:bg-neutral-800"}`
              }
            >
              Skills
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/manjeet/projects"
              className={({ isActive }) =>
                `navLi ${isActive ? "bg-neutral-800" : "bg-black  hover:bg-neutral-800"}`
              }
            >
              Projects
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/manjeet/contact"
              className={({ isActive }) =>
                `navLi ${isActive ? "bg-neutral-800" : "bg-black  hover:bg-neutral-800"}`
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
