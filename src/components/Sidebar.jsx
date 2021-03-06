import Logo from "../images/favicon.ico";
import { AiOutlineLogout } from "react-icons/ai";
import { MdOutlineCancel } from "react-icons/md";
import { Tooltip } from "@material-ui/core";

import { navLinks } from "../data/data";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";

import { auth } from "../fire";
import { signOut } from "firebase/auth";

const Sidebar = () => {
  const navigate = useNavigate();
  const { setActiveMenu, currentColor, handleCloseSidebar } = useStateContext();
  const activeLink =
    "flex items-center p-2 rounded-lg text-white text-lg text-white mb-4";
  const normalLink =
    "flex items-center text-lg p-2 dark:text-gray-200 rounded-lg text-gray-500 mb-4 hover:bg-light-gray hover:text-gray-500 dark:hover:text-slate-800";

  const logout = async () => {
    await signOut(auth);
    navigate("/login");
  };

  return (
    <div className="sidebar p-4 h-screen dark:bg-secondary-dark-bg">
      <div className="flex flex-col h-full justify-between">
        <div>
          <div className="flex items-center border-b-1 border-gray-200 mb-4">
            <Link
              to="/"
              onClick={handleCloseSidebar}
              className="flex items-center"
            >
              <span className="pr-2 w-[50px] h-[50px]">
                <img src={Logo} className="w-full" alt="kings-network-logo" />
              </span>
              <span className="text-lg text-gray-500 dark:text-gray-200 pr-3">
                King's Network
              </span>
            </Link>
            <div>
              <Tooltip title="Close" arrow>
                <button
                  type="button"
                  onClick={() =>
                    setActiveMenu((prevActiveMenu) => !prevActiveMenu)
                  }
                  className="text-xl dark:text-gray-200 dark:hover:text-slate-800 rounded-full p-3 hover:bg-light-gray block md:hidden"
                >
                  <MdOutlineCancel />
                </button>
              </Tooltip>
            </div>
          </div>
          <div>
            {navLinks.map((item, index) => (
              <NavLink
                key={index}
                to={`/${item.link}`}
                onClick={handleCloseSidebar}
                style={({ isActive }) => ({
                  backgroundColor: isActive ? currentColor : "",
                })}
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
              >
                <span className="p-2">{item.icon}</span>
                <span>{item.title}</span>
              </NavLink>
            ))}
          </div>
        </div>
        <div className="mb-4" onClick={handleCloseSidebar}>
          <NavLink to="" className={normalLink} onClick={logout}>
            <span className="p-2">
              <AiOutlineLogout />
            </span>
            <span>Logout</span>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
